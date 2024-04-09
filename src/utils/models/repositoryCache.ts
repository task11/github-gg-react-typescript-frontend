const REPOSITORY_KEY = 'getRepository';

export const repositoryCache = {
  getPagenatedUserRepositories: (username: string) => [
    REPOSITORY_KEY,
    'pagenated repositories',
    { username },
  ],

  getUserRepositories: (username: string) => [
    REPOSITORY_KEY,
    'repositories',
    { username },
  ],

  getRepositoryLanguage: (username: string, repositoryname: string) => [
    REPOSITORY_KEY,
    'language',
    { username, repositoryname },
  ],
  getRepositoryCommits: (username: string, repositoryname: string) => [
    REPOSITORY_KEY,
    'commits',
    { username, repositoryname },
  ],
};
