const USER_KEY = 'getUser';

export const userCache = {
  getUser: (username: string) => [USER_KEY, 'user', { username }],
  getUserRepositories: (username: string) => [
    USER_KEY,
    'repositories',
    { username },
  ],
};
