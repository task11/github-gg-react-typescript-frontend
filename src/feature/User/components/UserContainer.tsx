import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import server from '../../../lib/axios';

import UserInfo from './UserInfo/UserInfo';
import UserRepositories from './UserRepositories/UserRepositories';

import { StyledUserContainer } from './UserContainer.style';
import UserService from '../../../utils/services/User.service';

export default function UserContainer() {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserRepositories = async () => {
      const result = await UserService.getUserRepositories(username as string);
      setRepositories(result.data);
    };

    const getUser = async () => {
      const result = await UserService.getUser(username as string);
      setUser(result.data);
    };

    getUserRepositories();
    getUser();
  }, []);

  return (
    <StyledUserContainer>
      <UserInfo user={user} />
      <UserRepositories repositories={repositories} />
    </StyledUserContainer>
  );
}
