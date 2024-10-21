import { env } from 'node:process';

import { DEFAULT_API_PORT } from './constants/index.ts';
import { startServer } from './server/index.ts';

const port: number = Number(env.API_PORT) || DEFAULT_API_PORT;

startServer(port);
