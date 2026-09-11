import 'dotenv/config';
import { loadConfig } from './src/config.js';
import { createApp } from './src/app.js';

const config = loadConfig();
const app = createApp(config);

app.listen(config.port, () => {
  console.log(`Contact email server listening on http://localhost:${config.port}`);
});