import server from '../../lib/axios';

import { UserProps } from '../../types';

class UserService {
  getUser(username: string) {
    return server.get<UserProps>(`/users/${username}`);
  }
}

export default new UserService();
