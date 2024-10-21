import { addUser, getUsers, getUserById, removeUser, updateUser } from '../db/index.ts';

const getMap = {
  'api/users': getUsers,
  'api/users/{userId}': getUserById,
};

const postMap = {
  'api/users': addUser,
};

const putMap = {
  'api/users/{userId}': updateUser,
};

const deleteMap = {
  'api/users/{userId}': removeUser,
};

export const apiMap = {
  get: getMap,
  post: postMap,
  put: putMap,
  delete: deleteMap,
};
