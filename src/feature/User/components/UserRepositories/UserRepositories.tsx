import { RepositoriesProps } from '../../../../types';

import UserRepository from '../UserRepository/UserRepository';

import { StyledUserRepositories } from './UserRepositories.style';

interface Props {
  repositories: RepositoriesProps;
}

export default function UserRepositories({ repositories }: Props) {
  return (
    <StyledUserRepositories>
      {repositories.map((repository, idx) => (
        <UserRepository key={idx} repository={repository} />
      ))}
    </StyledUserRepositories>
  );
}
