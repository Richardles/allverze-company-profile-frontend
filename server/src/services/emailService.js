import nodemailer from 'nodemailer';
import { extractIntent } from '../lib/intents.js';
import { buildLeadRef } from '../lib/leadRef.js';
import { formatWhatsAppDisplay, formatReceivedAt, formatUserReceivedAt } from '../lib/format.js';
import { buildCompanyWhatsAppHref, buildLeadWhatsAppHref } from '../lib/whatsapp.js';
import { renderConfirmation } from '../templates/confirmation.js';
import { renderInbound } from '../templates/inbound.js';

const SEND_ATTEMPTS = 2;
const RETRY_DELAY_MS = 1000;
const CONFIRMATION_DELAY_MS = 3000;

export function createEmailService(config) {
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  return {
    async processInquiry(contact) {
      const receivedAt = formatReceivedAt(new Date(), config.timezone, config.timezoneLabel);
      const userReceivedAt =
        contact.timezone && contact.timezone !== config.timezone
          ? formatUserReceivedAt(new Date(), contact.timezone)
          : null;
      const { label: intentLabel, cleanMessage } = extractIntent(contact.message);
      const leadRef = buildLeadRef(intentLabel, config.timezone);

      const waHref = buildLeadWhatsAppHref({ name: contact.name, phone: contact.phone, leadRef });
      const waCompanyHref = buildCompanyWhatsAppHref({
        name: contact.name,
        companyNumber: config.whatsappNumber,
        leadRef,
      });

      await sendWithRetry(transporter, {
        from: `Allverze Corporation <${config.fromEmail}>`,
        to: config.contactEmail,
        envelope: { from: config.fromEmail, to: [config.contactEmail] },
        replyTo: contact.email,
        ...renderInbound({
          leadRef,
          receivedAt,
          userReceivedAt,
          intentLabel,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          message: cleanMessage,
          waHref,
        }),
      });
      console.log(`[inbound-email] Sent inquiry ${leadRef} to ${config.contactEmail}`);

      await delay(CONFIRMATION_DELAY_MS);

      const confirmation = await sendConfirmation({
        contact,
        cleanMessage,
        intentLabel,
        leadRef,
        receivedAt,
        userReceivedAt,
        waCompanyHref,
      });

      return { confirmation, leadRef };
    },
  };

  async function sendConfirmation({ contact, cleanMessage, intentLabel, leadRef, receivedAt, userReceivedAt, waCompanyHref }) {
    try {
      await sendWithRetry(transporter, {
        from: `Allverze Corporation <${config.fromEmail}>`,
        to: contact.email,
        envelope: { from: config.fromEmail, to: [contact.email] },
        ...renderConfirmation({
          leadRef,
          receivedAt,
          userReceivedAt,
          intentLabel,
          name: contact.name,
          phone: contact.phone,
          message: cleanMessage,
          publicEmail: config.publicEmail,
          whatsappDisplay: formatWhatsAppDisplay(config.whatsappNumber),
          waCompanyHref,
        }),
      });
      console.log(`[confirmation-email] Confirmation sent to ${contact.email} for ${leadRef}`);
      return 'sent';
    } catch (confirmError) {
      console.error(
        `[confirmation-email] Failed to send confirmation to ${contact.email} (${leadRef}):`,
        confirmError.message || confirmError
      );
      return 'failed';
    }
  }
}

async function sendWithRetry(transporter, mail, attempts = SEND_ATTEMPTS) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await transporter.sendMail(mail);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await delay(RETRY_DELAY_MS);
      }
    }
  }
  throw lastError;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}