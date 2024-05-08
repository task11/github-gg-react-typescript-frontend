import { useMemo } from 'react';

import useUser from '../../../utils/hooks/useUser';
import useUserRepositories from '../../../utils/hooks/useUserRepositories';
import useIntersectionObserver from '../../../utils/hooks/useIntersectionObserver';

import UserRepository from '../UserRepository';

import {
  StyledEmptyRepositories,
  StyledTarget,
  StyledUserRepositories,
  StyledUserRepositoriesGrid,
  StyledUserRepositoryInfo,
} from './styles';
import LoadingSpinner from '../../LoadingSpinner';
import UserRepositorySkeleton from '../UserRepositorySkeleton';

interface Props {
  username: string | undefined;
}

export default function UserRepositories({ username }: Props) {
  const {
    data: user,
    isLoading: loadingUser,
    isError: isErrorUserFetch,
  } = useUser(username as string);

  const {
    data,
    isLoading: loadingUserRepositories,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isError: isErrorRepositoriesFetch,
  } = useUserRepositories(username as string);

  const repositories = useMemo(
    () => (data ? data.pages.flatMap(({ data: list }) => list) : []),
    [data],
  );

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  if (loadingUser || loadingUserRepositories) {
    return <UserRepositorySkeleton />;
  }

  if (isErrorUserFetch || isErrorRepositoriesFetch) {
    return <>Something Error</>;
  }

  return (
    <>
      <StyledUserRepositories data-testid="user-repositories">
        <StyledUserRepositoryInfo>
          {user?.public_repos} Repositories
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
      {isFetching ? <LoadingSpinner /> : <StyledTarget ref={ref} />}
    </>
  );
}
