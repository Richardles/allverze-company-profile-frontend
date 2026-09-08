import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: '10kb' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, message, botcheck } = req.body ?? {};

  if (botcheck) {
    return res.json({ success: true });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid name, email address, and message.',
    });
  }

  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !recipient) {
    console.error('Missing SMTP configuration. Check the environment variables.');
    return res.status(500).json({
      success: false,
      message: 'Email service is not configured. Please try again later.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Allverze Website <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `New contact message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Unable to send contact email:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again later.',
    });
  }
});

app.listen(port, () => {
  console.log(`Contact email server listening on http://localhost:${port}`);
});