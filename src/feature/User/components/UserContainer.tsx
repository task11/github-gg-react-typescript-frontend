import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useUserInfo from '../api/useUser';
import useUserRepositories from '../api/useUserRepositories';

import { useIntersectionObserver } from '../../../utils/hooks';

import BookmarkService from '../../../utils/services/Bookmark.service';

import { QueryDataProps } from '../../../types';

import UserInfo from './UserInfo/UserInfo';
import UserRepositories from './UserRepositories/UserRepositories';

import { StyledTarget, StyledUserContainer } from './UserContainer.style';
import UserSkeleton from './UserSkeleton/UserSkeleton';

export default function UserContainer() {
  const { username } = useParams();

  const { data: user, isLoading: loadingUser } = useUserInfo(
    username as string,
  );

  const {
    data,
    isLoading: loadingUserRepositories,
    hasNextPage,
    isFetching,
    fetchNextPage,
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

  const handleBookmark = (queryData: QueryDataProps) => {
    BookmarkService.set(queryData);
  };

  if (loadingUser || loadingUserRepositories) return <UserSkeleton />;

  return (
    <StyledUserContainer>
      <UserInfo user={user} handleBookmark={handleBookmark} />
      <UserRepositories repositories={repositories} />
      {isFetching ? <div>불러오는 중..</div> : <StyledTarget ref={ref} />}
    </StyledUserContainer>
  );
}
