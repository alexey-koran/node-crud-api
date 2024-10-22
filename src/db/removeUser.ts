import type { Database } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const removeUser = (id: User['id'], database: Database): Database | null => {
  const databaseClone = structuredClone(database);

  const userIndex = databaseClone.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    return databaseClone.filter((_user, index) => index !== userIndex);
  }

  return null;
};
