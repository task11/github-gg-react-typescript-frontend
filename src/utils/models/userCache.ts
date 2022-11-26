const USER_KEY = 'getUsers';

export const userCache = {
  getUsersByQuery: (query: string, page: number) => [USER_KEY, { query, page }],
  getUsersByQueryPagenation: (query: string) => [USER_KEY, 'list', { query }],
};
