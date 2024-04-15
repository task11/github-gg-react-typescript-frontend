const USER_KEY = 'getUser';

export const userCache = {
  getUser: (username: string) => [USER_KEY, 'user', { username }],
};
