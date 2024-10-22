import { v7 } from 'uuid';

import type { Database, DatabaseOperationReturn } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const addUser = (user: Omit<User, 'id'>, database: Database): DatabaseOperationReturn => {
  const databaseClone = structuredClone(database);

  const newUser = {
    ...user,
    id: v7(),
  };

  databaseClone.push(newUser);

  return {
    database: databaseClone,
  };
};
