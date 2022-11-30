import { useParams } from 'react-router-dom';

import UserContents from './UserContents/UserContents';
import UserInfo from './UserInfo/UserInfo';
import UserRepositories from './UserRepositories/UserRepositories';

import { StyledUserContainer } from './UserContainer.style';

export default function UserContainer() {
  const { userId } = useParams();

  console.log(userId);

  return (
    <StyledUserContainer>
      <UserInfo />
      <UserContents />
      <UserRepositories />
    </StyledUserContainer>
  );
}
