import type { Database } from '../types/db.ts';
import type { User } from '../types/user.ts';

export const getUserById = (id: User['id'], database: Database): User | null => {
  const user = database.filter((_user) => _user.id === id)[0];

  if (user !== undefined) {
    return user;
  }

  return null;
};
