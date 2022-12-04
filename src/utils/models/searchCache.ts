const SEARCH_KEY = 'getUsers';

export const searchCache = {
  getUsersBySearchForm: (query: string) => [
    SEARCH_KEY,
    'searchRecommend',
    { query },
  ],
  getUsersBySearchResult: (query: string) => [
    SEARCH_KEY,
    'searchResult',
    { query },
  ],
};
