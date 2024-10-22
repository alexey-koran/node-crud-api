import type { Database } from '../types/db.ts';

export const getUsers = (database: Database): Database => {
  return structuredClone(database);
};
