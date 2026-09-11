import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const LOGO_PATH = fileURLToPath(new URL('../../assets/email-logo.png', import.meta.url));

export const EMAIL_LOGO_SRC = `data:image/png;base64,${readFileSync(LOGO_PATH).toString('base64')}`;