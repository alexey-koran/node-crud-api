import { v7 } from 'uuid';

import type { Database } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const addUser = (user: Omit<User, 'id'>, database: Database) => {
  const databaseClone = structuredClone(database);

  const newUser = {
    ...user,
    id: v7(),
  };

  databaseClone.push(newUser);

  return databaseClone;
};
