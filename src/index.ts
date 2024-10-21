import { env } from 'node:process';

import { defaultServerPort } from './constants/index.ts';
import { startServer } from './server/index.ts';

const port: number = Number(env.API_PORT) || defaultServerPort;

startServer(port);
