import { useParams } from 'react-router-dom';

import UserInfo from '../../components/User/UserInfo';
import UserRepositories from '../../components/User/UserRepositories';

import UserCommits from '../../components/User/UserCommits';

import { StyledUser, StyledUserContainer } from './styles';

export default function UserPage() {
  const { username } = useParams();

  return (
    <StyledUser>
      <StyledUserContainer>
        <UserInfo username={username} />
        <UserCommits username={username} />
        <UserRepositories username={username} />
      </StyledUserContainer>
    </StyledUser>
  );
}
