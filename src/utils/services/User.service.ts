import server from '../../lib/axios';

class UserService {
  getUser(username: string) {
    return server.get(`/users/${username}`);
  }

  getUserRepositories(username: string) {
    return server.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 4,
        page: 0,
      },
    });
  }
}

export default new UserService();
