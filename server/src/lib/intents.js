export const INTENT_CODES = {
  'Custom Software Engineering': 'CSW',
  'Mobile Application Development': 'MAD',
  'Application Performance Monitoring': 'APM',
  'Performance & Automation Testing': 'PAT',
  'Discovery & Advisory': 'DAV',
  'Other': 'OTH',
};

const INTENT_PREFIX = /^\[Intent: (.+?)\]\s*(?:\n\n)?/;

export function extractIntent(message) {
  const match = message.trim().match(INTENT_PREFIX);
  if (match) {
    return {
      label: match[1].trim(),
      cleanMessage: message.trim().slice(match[0].length),
    };
  }
  return { label: 'General Inquiry', cleanMessage: message.trim() };
}

export function getIntentCode(label) {
  return INTENT_CODES[label] ?? 'GEN';
}