import { RepositoriesProps } from '../../../types';

import UserRepository from '../UserRepository';

import {
  StyledUserRepositories,
  StyledUserRepositoriesGrid,
  StyledUserRepositoryInfo,
} from './styles';

interface Props {
  publicRepositoryCounts: number;
  repositories: RepositoriesProps;
}

export default function UserRepositories({
  publicRepositoryCounts,
  repositories,
}: Props) {
  return (
    <StyledUserRepositories>
      <StyledUserRepositoryInfo>
        {publicRepositoryCounts} Repositories
      </StyledUserRepositoryInfo>
      <StyledUserRepositoriesGrid>
        {repositories.map((repository) => (
          <UserRepository key={repository.id} repository={repository} />
        ))}
      </StyledUserRepositoriesGrid>
    </StyledUserRepositories>
  );
}
