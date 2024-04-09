import server from '../../lib/axios';

import { CommitProps, RepositoriesProps } from '../../types';

class RepositoryService {
  getPagenatedUserRepositories(username: string, page: number) {
    return server.get<RepositoriesProps>(`/users/${username}/repos`, {
      params: {
        sort: 'pushed',
        per_page: 4,
        page,
      },
    });
  }

  getUserRepositories(username: string) {
    return server.get<RepositoriesProps>(`/users/${username}/repos`, {
      params: {
        sort: 'pushed',
        per_page: 3,
        page: 1,
      },
    });
  }

  getUserRespositoryLanguage(username: string, repositoryname: string) {
    return server.get(`/repos/${username}/${repositoryname}/languages`);
  }

  getUserRepositoryCommits(username: string, repositoryname: string) {
    return server.get<CommitProps[]>(
      `/repos/${username}/${repositoryname}/commits?per_page=3`,
    );
  }
}

export default new RepositoryService();
