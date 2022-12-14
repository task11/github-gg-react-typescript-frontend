import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useUserInfo from '../api/useUser';
import useUserRepositories from '../api/useUserRepositories';

import { useIntersectionObserver } from '../../../utils/hooks';

import BookmarkService from '../../../utils/services/Bookmark.service';

import { QueryDataProps } from '../../../types';

import UserInfo from './UserInfo/UserInfo';
import UserRepositories from './UserRepositories/UserRepositories';
import UserSkeleton from './UserSkeleton/UserSkeleton';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Error from '../../../components/Error/Error';

import {
  StyledErrorWrapper,
  StyledTarget,
  StyledUserContainer,
} from './UserContainer.style';

export default function UserContainer() {
  const { username } = useParams();

  const {
    data: user,
    isLoading: loadingUser,
    isError: isErrorUserFetch,
  } = useUserInfo(username as string);

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

  const handleBookmark = (queryData: QueryDataProps) => {
    BookmarkService.set(queryData);
  };

  if (loadingUser || loadingUserRepositories) {
    return <UserSkeleton />;
  }

  if (isErrorUserFetch || isErrorRepositoriesFetch || !user || !repositories) {
    return (
      <StyledErrorWrapper>
        <Error />
      </StyledErrorWrapper>
    );
  }

  return (
    <StyledUserContainer>
      <UserInfo user={user} handleBookmark={handleBookmark} />
      <UserRepositories repositories={repositories} />
      {isFetching ? <LoadingSpinner /> : <StyledTarget ref={ref} />}
    </StyledUserContainer>
  );
}
