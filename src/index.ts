import { env } from 'node:process';

import { defaultServerPort } from './constants/index.ts';
import { createServer } from './server/index.ts';

const port: number = Number(env.API_PORT) || defaultServerPort;

export const server = createServer(port);
