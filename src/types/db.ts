import type { User } from './user.ts';

export type Database = User[];

export interface DatabaseOperationReturn {
  database: Database;
}
