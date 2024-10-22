import { env } from 'node:process';

import { DEFAULT_API_PORT } from './constants/index.ts';
import { startServer } from './server/index.ts';

const apiPort = Number(env.API_PORT);

const port: number = isNaN(apiPort) ? DEFAULT_API_PORT : apiPort;

startServer(port);
