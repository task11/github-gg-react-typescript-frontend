import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useUser from '../../utils/hooks/useUser';
import useUserRepositories from '../../utils/hooks/useUserRepositories';
import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver';

import { QueryDataProps } from '../../types';

import BookmarkService from '../../utils/services/Bookmark.service';

import UserSkeleton from '../../components/User/UserSkeleton';
import Error from '../../components/Error';
import UserInfo from '../../components/User/UserInfo';
import UserRepositories from '../../components/User/UserRepositories';
import LoadingSpinner from '../../components/LoadingSpinner';

import {
  StyledErrorWrapper,
  StyledTarget,
  StyledUser,
  StyledUserContainer,
} from './styles';

export default function UserPage() {
  const { username } = useParams();

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
    <StyledUser>
      <StyledUserContainer>
        <UserInfo user={user} handleBookmark={handleBookmark} />
        <UserRepositories repositories={repositories} />
        {isFetching ? <LoadingSpinner /> : <StyledTarget ref={ref} />}
      </StyledUserContainer>
    </StyledUser>
  );
}
