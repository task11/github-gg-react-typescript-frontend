const REPOSITORY_KEY = 'getRepository';

export const repositoryCache = {
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
