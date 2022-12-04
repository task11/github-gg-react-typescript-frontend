import server from '../../lib/axios';

import { RepositoriesProps, UserProps } from '../../types';

class UserService {
  getUser(username: string) {
    return server.get<UserProps>(`/users/${username}`);
  }

  getUserRepositories(username: string, page: number) {
    return server.get<RepositoriesProps>(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 4,
        page,
      },
    });
  }
}

export default new UserService();
