import { useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useIntersectionObserver } from '../../../utils/hooks';

import useUserInfo from '../api/useUser';
import useUserRepositories from '../api/useUserRepositories';

import UserInfo from './UserInfo/UserInfo';
import UserRepositories from './UserRepositories/UserRepositories';

import { StyledTarget, StyledUserContainer } from './UserContainer.style';

export default function UserContainer() {
  const { username } = useParams();
  const [page, setPage] = useState(1);

  const { data: user, isLoading: loadingUser } = useUserInfo(
    username as string,
  );

  const {
    data,
    isLoading: loadingUserRepositories,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useUserRepositories(username as string, page);

  const repositories = useMemo(
    () => (data ? data.pages.flatMap(({ data: list }) => list) : []),
    [data],
  );

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      setPage((currentState) => currentState + 1);
      fetchNextPage();
    }
  });

  if (loadingUser || loadingUserRepositories) return <>loading...</>;

  return (
    <StyledUserContainer>
      <UserInfo user={user} />
      <UserRepositories repositories={repositories} />
      <StyledTarget ref={ref} />
    </StyledUserContainer>
  );
}
