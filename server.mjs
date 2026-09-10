import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { randomBytes } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const app = express();

app.set('trust proxy', 1);

const config = {
  port: Number(process.env.PORT || 3001),
  smtpHost: process.env.SMTP_HOST,
  smtpPort: Number(process.env.SMTP_PORT || 587),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  fromEmail: process.env.SMTP_FROM || process.env.PUBLIC_EMAIL || 'team@allverze.com',
  contactEmail: process.env.CONTACT_EMAIL || 'team@allverze.com',
  publicEmail: process.env.PUBLIC_EMAIL || 'team@allverze.com',
  whatsappNumber: process.env.WHATSAPP_NUMBER || '6281283812336',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
};

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]?.trim());
if (missingEnv.length > 0) {
  console.error(`[config] Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

const EMAIL_LOGO_PATH = fileURLToPath(new URL('./src/imports/email-logo.png', import.meta.url));
const EMAIL_LOGO_SRC = `data:image/png;base64,${readFileSync(EMAIL_LOGO_PATH).toString('base64')}`;

function formatWhatsAppDisplay(value) {
  const digits = String(value).replace(/\D/g, '');
  if (digits.length < 4) return String(value);
  return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 9)} ${digits.slice(9)}`;
}

app.use(helmet());
app.use(cors({ origin: config.frontendUrl, credentials: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});
app.use('/api/contact', limiter);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const INTENT_CODES = {
  'Custom Software Engineering': 'CSW',
  'Mobile Application Development': 'MAD',
  'Application Performance Monitoring': 'APM',
  'Performance & Automation Testing': 'PAT',
  'Discovery & Advisory': 'DAV',
  'Other': 'OTH',
};

function pad2(value) {
  return String(value).padStart(2, '0');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function extractIntent(message) {
  const match = message.trim().match(/^\[Intent: (.+?)\]\s*(?:\n\n)?/);
  if (match) {
    return {
      label: match[1].trim(),
      cleanMessage: message.trim().slice(match[0].length),
    };
  }
  return { label: 'General Inquiry', cleanMessage: message.trim() };
}

function getIntentCode(label) {
  return INTENT_CODES[label] ?? 'GEN';
}

function buildLeadRef(intentLabel) {
  const now = new Date();
  const date = `${pad2(now.getFullYear() % 100)}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}`;
  const time = `${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}`;
  return `AVZ-${getIntentCode(intentLabel)}-${date}-${time}-${randomBytes(4).toString('hex')}`;
}

async function sendWithRetry(transporter, mail, attempts = 2) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await transporter.sendMail(mail);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }
  throw lastError;
}

app.use(express.json({ limit: '10kb' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, botcheck } = req.body ?? {};

  if (botcheck) {
    return res.json({ success: true, confirmation: 'skipped' });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email) ||
    !/^[+]?[\d\s\-()]{7,20}$/.test(phone) ||
    !message.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid name, email address, phone number, and message.',
    });
  }

  if (!config.smtpHost || !config.smtpUser || !config.smtpPass || !config.contactEmail) {
    console.error('[config] SMTP configuration incomplete. Check the environment variables.');
    return res.status(500).json({
      success: false,
      message: 'Email service is not configured. Please try again later.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  try {
    const receivedAt = new Date().toUTCString();
    const { label: intentLabel, cleanMessage } = extractIntent(message);
    const leadRef = buildLeadRef(intentLabel);

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeMessage = escapeHtml(cleanMessage);

    let waDigits = phone.replace(/\D/g, '');
    if (waDigits.startsWith('0')) waDigits = `62${waDigits.slice(1)}`;
    const waHref = `https://wa.me/${waDigits}?text=${encodeURIComponent(
      `Hi ${name.trim()}, thank you for contacting Allverze. We received your inquiry (${leadRef}) and we're on it. Let's connect!`
    )}`;
    const waCompanyHref = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
      `Hi Allverze team, this is ${name.trim()}. I just submitted an inquiry via your website (Reference: ${leadRef}) and I'd be glad to discuss it privately.`
    )}`;

    await sendWithRetry(transporter, {
      from: `Allverze Website <${config.fromEmail}>`,
      to: config.contactEmail,
      envelope: { from: config.fromEmail, to: [config.contactEmail] },
      replyTo: email.trim(),
      subject: `New contact message from ${name.trim()}`,
      text: `NEW CONTACT MESSAGE
Lead Reference: ${leadRef}
Received: ${receivedAt}
Intent: ${intentLabel}

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone.trim()}

Message:
${cleanMessage}

RESPONSE SLA: Reply to this customer within 1 business day.`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#0B1D35;padding:36px 40px 28px;text-align:center;">
              <img src="${EMAIL_LOGO_SRC}" alt="Allverze" width="210" style="width:210px;height:auto;max-width:60%;display:inline-block;border:0;outline:none;text-decoration:none;" />
              <p style="margin:14px 0 14px;font-size:0.75rem;font-weight:600;color:rgba(255,255,255,0.45);letter-spacing:0.08em;text-transform:uppercase;">New Contact Message</p>
              <div style="display:inline-block;background:rgba(56,189,248,0.15);color:#38BDF8;font-size:0.6875rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 14px;border-radius:999px;border:1px solid rgba(56,189,248,0.25);">New Inquiry</div>
            </td>
          </tr>

          <!-- Brand Accent -->
          <tr>
            <td style="background:#0055E5;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Lead Reference -->
          <tr>
            <td style="padding:28px 40px 4px;border-bottom:1px solid #E2E8F0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:0.75rem;color:#8AA0BD;">Lead Reference</td>
                  <td style="text-align:right;font-size:0.8125rem;font-weight:700;color:#0B1D35;">${leadRef}</td>
                </tr>
                <tr>
                  <td style="padding-top:6px;font-size:0.75rem;color:#8AA0BD;">Received</td>
                  <td style="padding-top:6px;text-align:right;font-size:0.8125rem;color:#4A6080;">${receivedAt}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SLA Banner -->
          <tr>
            <td style="padding:20px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(0,85,229,0.06);border:1px solid rgba(0,85,229,0.20);border-radius:10px;">
                <tr>
                  <td style="padding:12px 16px;font-size:0.8125rem;color:#0055E5;font-weight:600;line-height:1.5;">
                    Response SLA: Reply to this customer within <strong>1 business day</strong>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding:28px 40px 8px;">
              <p style="margin:0 0 14px;font-size:0.6875rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8AA0BD;">Customer Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;width:90px;vertical-align:top;">Name</td>
                        <td style="padding:6px 0;font-size:0.9375rem;font-weight:600;color:#0B1D35;">${safeName}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Email</td>
                        <td style="padding:6px 0;font-size:0.875rem;color:#0055E5;font-weight:600;">
                          <a href="mailto:${safeEmail}" style="color:#0055E5;text-decoration:none;">${safeEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Phone</td>
                        <td style="padding:6px 0;font-size:0.875rem;color:#0B1D35;font-weight:600;">${safePhone}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Intent</td>
                        <td style="padding:6px 0;font-size:0.875rem;color:#0B1D35;font-weight:600;">${intentLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:12px 40px 24px;">
              <p style="margin:0 0 8px;font-size:0.6875rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8AA0BD;">Message</p>
              <p style="margin:0;padding:16px 18px;font-size:0.9375rem;color:#4A6080;line-height:1.7;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;white-space:pre-wrap;">${safeMessage}</p>
            </td>
          </tr>

          <!-- WhatsApp Action -->
          <tr>
            <td style="padding:0 40px 28px;">
              <a href="${waHref}" target="_blank" rel="noopener" style="display:block;background:#0055E5;color:#FFFFFF;font-size:0.875rem;font-weight:700;text-align:center;text-decoration:none;padding:13px 20px;border-radius:9px;">
                Open WhatsApp Chat &rarr;
              </a>
              <p style="margin:10px 0 0;text-align:center;font-size:0.75rem;color:#8AA0BD;">Engage this customer directly on WhatsApp (${safePhone}).</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:0.8125rem;font-weight:700;color:#0B1D35;">Allverze Technology</p>
              <p style="margin:0 0 12px;font-size:0.75rem;color:#8AA0BD;">Engineering Tomorrow's Solutions</p>
              <p style="margin:0;font-size:0.6875rem;color:#8AA0BD;">New inquiry via <a href="https://allverze.com" style="color:#0055E5;text-decoration:none;font-weight:600;">allverze.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });
    console.log(`[inbound-email] Sent inquiry ${leadRef} to ${config.contactEmail}`);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    let confirmSent = false;
    try {
      await sendWithRetry(transporter, {
        from: `Allverze <${config.fromEmail}>`,
        to: email.trim(),
        envelope: { from: config.fromEmail, to: [email.trim()] },
        subject: `We've received your message — Allverze`,
        text: `Hi ${name.trim()},

Thank you for reaching out to Allverze. We've received your message, and our team will review your inquiry within one business day.

Reference: ${leadRef}
Intent: ${intentLabel}
Phone: ${phone.trim()}

Need a faster response? Reach us directly:
- Email: ${config.publicEmail}
- WhatsApp: ${formatWhatsAppDisplay(config.whatsappNumber)}

Best regards,
The Allverze Team`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#0B1D35;padding:36px 40px 28px;text-align:center;">
              <img src="${EMAIL_LOGO_SRC}" alt="Allverze" width="210" style="width:210px;height:auto;max-width:60%;display:inline-block;border:0;outline:none;text-decoration:none;" />
              <p style="margin:14px 0 0;font-size:0.75rem;font-weight:600;color:rgba(255,255,255,0.45);letter-spacing:0.08em;text-transform:uppercase;">Technology Solutions</p>
            </td>
          </tr>

          <!-- Brand Accent -->
          <tr>
            <td style="background:#0055E5;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h2 style="margin:0 0 16px;font-size:1.25rem;font-weight:700;color:#0B1D35;">Hi ${safeName},</h2>
              <p style="margin:0 0 20px;font-size:0.9375rem;color:#4A6080;line-height:1.7;">
                Thank you for reaching out to us. We've received your message and our team will review your inquiry within <strong style="color:#0B1D35;">one business day</strong>.
              </p>

              <!-- Summary Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 14px;font-size:0.6875rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8AA0BD;">Inquiry Summary</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;width:80px;vertical-align:top;">Reference</td>
                        <td style="padding:6px 0;font-size:0.875rem;font-weight:700;color:#0055E5;">${leadRef}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Intent</td>
                        <td style="padding:6px 0;font-size:0.875rem;font-weight:600;color:#0B1D35;">${intentLabel}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Phone</td>
                        <td style="padding:6px 0;font-size:0.875rem;font-weight:600;color:#0B1D35;">${safePhone}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:0.8125rem;color:#8AA0BD;vertical-align:top;">Message</td>
                        <td style="padding:6px 0;font-size:0.875rem;color:#4A6080;line-height:1.6;">${escapeHtml(cleanMessage.slice(0, 300))}${cleanMessage.length > 300 ? '...' : ''}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Contact Section -->
              <p style="margin:0 0 14px;font-size:0.9375rem;color:#4A6080;line-height:1.7;">Need a faster response? Reach us directly:</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:0 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:16px 0;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8AA0BD;width:120px;vertical-align:middle;">Email</td>
                        <td style="padding:16px 0;font-size:0.9375rem;font-weight:700;text-align:right;">
                          <a href="mailto:${config.publicEmail}" style="color:#0055E5;text-decoration:none;">${config.publicEmail}</a>
                        </td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #E2E8F0;">
                      <tr>
                        <td style="padding:16px 0;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#8AA0BD;width:120px;vertical-align:middle;">WhatsApp</td>
                        <td style="padding:16px 0;font-size:0.9375rem;font-weight:600;text-align:right;color:#0B1D35;">${formatWhatsAppDisplay(config.whatsappNumber)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                <tr>
                  <td align="center">
                    <a href="${waCompanyHref}" target="_blank" rel="noopener" style="display:inline-block;background:#0055E5;color:#FFFFFF;font-size:0.9375rem;font-weight:700;text-align:center;text-decoration:none;padding:14px 36px;border-radius:9px;">
                      Chat With Us on WhatsApp &nbsp;&rarr;
                    </a>
                    <p style="margin:10px 0 0;font-size:0.75rem;color:#8AA0BD;">Priority access &middot; Typically responds within minutes</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:0.8125rem;font-weight:700;color:#0B1D35;">Allverze Technology</p>
              <p style="margin:0 0 12px;font-size:0.75rem;color:#8AA0BD;">Engineering Tomorrow's Solutions</p>
              <p style="margin:0;font-size:0.6875rem;color:#8AA0BD;">You reached out through <a href="https://allverze.com" style="color:#0055E5;text-decoration:none;font-weight:600;">allverze.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      });
      confirmSent = true;
      console.log(`[confirmation-email] Confirmation sent to ${email.trim()} for ${leadRef}`);
    } catch (confirmError) {
      console.error(
        `[confirmation-email] Failed to send confirmation to ${email.trim()} (${leadRef}):`,
        confirmError.message || confirmError
      );
    }

    return res.json({ success: true, confirmation: confirmSent ? 'sent' : 'failed', leadRef });
  } catch (error) {
    console.error('[inbound-email] Failed to send inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again later.',
    });
  }
});

app.listen(config.port, () => {
  console.log(`Contact email server listening on http://localhost:${config.port}`);
});