import type { Database } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const updateUser = (updatedUser: User, database: Database) => {
  const databaseClone = structuredClone(database);

  const userIndex = databaseClone.findIndex((user) => user.id === updatedUser.id);

  if (userIndex !== -1) {
    databaseClone[userIndex] = updatedUser;

    return databaseClone;
  }

  return null;
};
