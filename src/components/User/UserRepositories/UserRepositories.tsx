import { RepositoriesProps } from '../../../types';

import UserRepository from '../UserRepository';

import { StyledUserRepositories } from './styles';

interface Props {
  repositories: RepositoriesProps;
}

export default function UserRepositories({ repositories }: Props) {
  return (
    <StyledUserRepositories>
      {repositories.map((repository) => (
        <UserRepository key={repository.id} repository={repository} />
      ))}
    </StyledUserRepositories>
  );
}
