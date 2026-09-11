const DEFAULTS = {
  port: 3001,
  smtpPort: 587,
  fromEmail: 'hello@allverze.com',
  contactEmail: 'hello@allverze.com',
  publicEmail: 'hello@allverze.com',
  whatsappNumber: '6281283812336',
  frontendUrl: 'http://localhost:5173',
  timezone: 'Asia/Jakarta',
  timezoneLabel: 'WIB',
};

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];

export function loadConfig() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]?.trim());
  if (missing.length > 0) {
    console.error(`[config] Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }

  return {
    port: Number(process.env.PORT || DEFAULTS.port),
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number(process.env.SMTP_PORT || DEFAULTS.smtpPort),
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    fromEmail: process.env.SMTP_FROM || process.env.PUBLIC_EMAIL || DEFAULTS.fromEmail,
    contactEmail: process.env.CONTACT_EMAIL || DEFAULTS.contactEmail,
    publicEmail: process.env.PUBLIC_EMAIL || DEFAULTS.publicEmail,
    whatsappNumber: process.env.WHATSAPP_NUMBER || DEFAULTS.whatsappNumber,
    frontendUrl: process.env.FRONTEND_URL || DEFAULTS.frontendUrl,
    timezone: process.env.TIMEZONE || DEFAULTS.timezone,
    timezoneLabel: process.env.TIMEZONE_LABEL || DEFAULTS.timezoneLabel,
  };
}