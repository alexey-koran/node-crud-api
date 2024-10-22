import type { Database, DatabaseOperationReturn } from '../types/db.ts';
import type { User } from '../types/user.ts';

interface GetUserByIdReturn extends DatabaseOperationReturn {
  user: User;
}

export const getUserById = (id: User['id'], database: Database): GetUserByIdReturn | null => {
  const user = database.filter((_user) => _user.id === id)[0];

  if (user !== undefined) {
    return {
      user,
      database,
    };
  }

  return null;
};
