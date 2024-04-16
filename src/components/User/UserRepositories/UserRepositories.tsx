import { RepositoriesProps } from '../../../types';

import UserRepository from '../UserRepository';

import {
  StyledEmptyRepositories,
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
      {repositories.length === 0 ? (
        <StyledEmptyRepositories>
          There are no repositories to display
        </StyledEmptyRepositories>
      ) : (
        <StyledUserRepositoriesGrid>
          {repositories.map((repository) => (
            <UserRepository key={repository.id} repository={repository} />
          ))}
        </StyledUserRepositoriesGrid>
      )}
    </StyledUserRepositories>
  );
}
