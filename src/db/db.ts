import type { Database } from '../types/db.ts';

export const createDatabase = (): Database => {
  const database: Database = [];

  return database;
};

interface InitDatabaseReturn {
  database: Database;
  updateDatabase: (newDatabase: Database) => void;
}

export const initDatabase = (): InitDatabaseReturn => {
  let database = createDatabase();

  const updateDatabase = (newDatabase: Database): void => {
    database = newDatabase;
  };

  return {
    database,
    updateDatabase,
  };
};
