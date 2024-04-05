import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import useSearchResult from '../../../utils/hooks/useSearchResult';
import useQueryParams from '../../../utils/hooks/useQueryParams';

import { QueryDataProps } from '../../../types';
import RecentService from '../../../utils/services/Recent.service';

import SearchResultCard from '../SearchResultCard';

import { StyledResultCardList } from './styles';

export default function SearchResultCardList() {
  const { queryString } = useQueryParams('q');
  const navigate = useNavigate();

  useEffect(() => {
    if (!queryString) {
      navigate('/');
    }
  }, [queryString]);

  const onSearchQuery = (queryData: QueryDataProps) => {
    const { username } = queryData;

    RecentService.set(queryData);
    navigate(`/user/${username}`);
  };

  const { data } = useSearchResult(queryString as string);

  const items = useMemo(
    () => (data ? data.pages.flatMap(({ data: list }) => list.items) : []),
    [data],
  );

  return (
    <StyledResultCardList>
      {items.map((result, idx) => (
        <SearchResultCard
          data-testid="search-result-card"
          key={idx}
          result={result}
          onSearchQuery={onSearchQuery}
        />
      ))}
    </StyledResultCardList>
  );
}
