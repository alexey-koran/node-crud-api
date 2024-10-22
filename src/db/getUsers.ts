import type { Database, DatabaseOperationReturn } from '../types/db.ts';

export const getUsers = (database: Database): DatabaseOperationReturn => {
  return {
    database: structuredClone(database),
  };
};
