import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import useSearchResult from '../api/useSearchResult';
import { useIntersectionObserver, useQueryParams } from '../../../utils/hooks';

import RecentService from '../../../utils/services/Recent.service';

import SearchResultCardList from './SearchResultCardList/SearchResultCardList';
import SearchResultHeader from './SearchResultHeader/SearchResultHeader';

import {
  StyledSearchResultContainer,
  StyledTarget,
} from './SearchResultContainer.style';
import { QueryDataProps } from '../../../types/queryData';

export default function SearchResultContainer() {
  const { queryString } = useQueryParams('q');
  const navigate = useNavigate();

  useEffect(() => {
    if (!queryString) {
      navigate('/');
    }
  }, [queryString]);

  const { data, isLoading, hasNextPage, isFetching, fetchNextPage } =
    useSearchResult(queryString as string);

  const items = useMemo(
    () => (data ? data.pages.flatMap(({ data: list }) => list.items) : []),
    [data],
  );

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const onSearchQuery = (queryData: QueryDataProps) => {
    const { username } = queryData;

    RecentService.set(queryData);
    navigate(`/user/${username}`);
  };

  if (isLoading || !data) {
    return <div>스켈레톤</div>;
  }

  return (
    <StyledSearchResultContainer>
      <SearchResultHeader totalCount={data.pages[0].data.total_count} />
      <SearchResultCardList
        searchResult={items}
        onSearchQuery={onSearchQuery}
      />
      {isFetching ? <div>불러오는 중..</div> : <StyledTarget ref={ref} />}
    </StyledSearchResultContainer>
  );
}
