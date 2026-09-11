import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { createContactRouter } from './routes/contact.js';
import { healthRouter } from './routes/health.js';
import { createEmailService } from './services/emailService.js';

const CONTACT_LIMITER_OPTIONS = {
  windowMs: 15 * 60 * 1000,
  max: 20,
};

export function createApp(config) {
  const app = express();

  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(cors({ origin: config.frontendUrl, credentials: true }));
  app.use(express.json({ limit: '10kb' }));

  const contactLimiter = rateLimit({
    ...CONTACT_LIMITER_OPTIONS,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests. Please try again later.' },
  });

  const emailService = createEmailService(config);

  app.use('/api/health', healthRouter);
  app.use('/api/contact', contactLimiter, createContactRouter(emailService));

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

function notFoundHandler(req, res) {
  res.status(404).json({ success: false, message: 'Not found.' });
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.error('[error]', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
}