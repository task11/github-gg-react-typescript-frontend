import { RepositoriesProps } from '../../../../types';

import UserRepository from '../UserRepository/UserRepository';

import {
  StyledTarget,
  StyledUserRepositories,
  StyledUserRepositoriesHeader,
} from './UserRepositories.style';

// interface Props {
//   repositories: RepositoriesProps;
// }

export default function UserRepositories() {
  return (
    <StyledUserRepositories>
      <StyledUserRepositoriesHeader>
        42 Repositories
      </StyledUserRepositoriesHeader>
      <UserRepository />
      <UserRepository />
      <UserRepository />
      <UserRepository />
      <StyledTarget />
    </StyledUserRepositories>
  );
}
