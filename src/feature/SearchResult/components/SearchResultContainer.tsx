import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetchSearchResult from '../api/useSearchResult';
import { useIntersectionObserver, useQueryParams } from '../../../utils/hooks';

import RecentService from '../../../utils/services/Recent.service';

import SearchResultCardList from './SearchResultCardList/SearchResultCardList';
import SearchResultHeader from './SearchResultHeader/SearchResultHeader';

import { StyledSearchResultContainer } from './SearchResultContainer.style';
import { QueryDataProps } from '../../../types/queryData';

export default function SearchResultContainer() {
  const { queryString } = useQueryParams('q');
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!queryString) {
      navigate('/');
    }
  }, [queryString]);

  const { data, isLoading, hasNextPage, isFetching, fetchNextPage } =
    useFetchSearchResult(queryString as string, page);

  const items = useMemo(
    () => (data ? data.pages.flatMap(({ data: list }) => list.items) : []),
    [data],
  );

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      setPage((currentState) => currentState + 1);
      fetchNextPage();
    }
  });

  const onSearchQuery = (queryData: QueryDataProps) => {
    const { id } = queryData;

    RecentService.set(queryData);
    navigate(`/user/${id}`);
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
      {isFetching ? (
        <div>불러오는 중..</div>
      ) : (
        <div ref={ref} style={{ height: '1px' }} />
      )}
    </StyledSearchResultContainer>
  );
}
