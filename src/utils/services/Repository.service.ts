import server from '../../lib/axios';

class RepositoryService {
  getUserRespositoryLanguage(username: string, repositoryname: string) {
    return server.get(`/repos/${username}/${repositoryname}/languages`);
  }
}

export default new RepositoryService();
