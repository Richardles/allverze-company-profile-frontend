import { randomBytes } from 'node:crypto';
import { getIntentCode } from './intents.js';
import { formatTimeParts } from './format.js';

export function buildLeadRef(intentLabel, timezone = 'Asia/Jakarta', now = new Date()) {
  const t = formatTimeParts(now, timezone);
  const date = `${t.year}${t.month}${t.day}`;
  const time = `${t.hour}${t.minute}${t.second}`;
  return `AVZ-${getIntentCode(intentLabel)}-${date}-${time}-${randomBytes(8).toString('hex')}`;
}