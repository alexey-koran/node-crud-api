import type { Database } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const getUserById = (id: User['id'], database: Database) => {
  const user = database.filter((user) => user?.id === id)[0];

  if (user) {
    return user;
  }

  return null;
};
