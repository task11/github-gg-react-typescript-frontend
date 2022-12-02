import { RepositoriesProps } from '../../../../types';

import UserRepository from '../UserRepository/UserRepository';

import { StyledTarget, StyledUserRepositories } from './UserRepositories.style';

interface Props {
  repositories: RepositoriesProps;
}

export default function UserRepositories({ repositories }: Props) {
  return (
    <StyledUserRepositories>
      {repositories.map((repository) => (
        <UserRepository key={repository.id} repository={repository} />
      ))}
      <StyledTarget />
    </StyledUserRepositories>
  );
}
