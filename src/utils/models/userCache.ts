const USER_KEY = 'getUsers';

export const userCache = {
  getUsersByQuery: (query: string) => [USER_KEY, { query }],
};
