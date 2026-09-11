import { Router } from 'express';
import { validateContactInput } from '../validation.js';

export function createContactRouter(emailService) {
  const router = Router();

  router.post('/', async (req, res, next) => {
    try {
      if (req.body?.botcheck) {
        return res.json({ success: true, confirmation: 'skipped' });
      }

      const validation = validateContactInput(req.body ?? {});
      if (!validation.ok) {
        return res.status(400).json({ success: false, message: validation.message });
      }

      const result = await emailService.processInquiry(validation.data);
      return res.json({ success: true, confirmation: result.confirmation, leadRef: result.leadRef });
    } catch (error) {
      return next(error);
    }
  });

  return router;
}