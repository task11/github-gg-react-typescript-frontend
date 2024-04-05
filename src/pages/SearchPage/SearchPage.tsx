import useQueryParams from '../../utils/hooks/useQueryParams';
import useSearchResult from '../../utils/hooks/useSearchResult';

import SearchResultCardList from '../../components/SearchResult/SearchResultCardList';
import SearchResultHeader from '../../components/SearchResult/SearchResultHeader';
import SearchResultInfinityScroll from '../../components/SearchResult/SearchResultInfinityScroll';
import SearchResultSkeleton from '../../components/SearchResult/SearchResultSkeleton';

import { StyledSearch, StyledSearchResultContainer } from './styles';

export default function SearchPage() {
  const { queryString } = useQueryParams('q');
  const { data, isLoading } = useSearchResult(queryString as string);

  if (isLoading || !data) {
    return <SearchResultSkeleton />;
  }

  return (
    <StyledSearch>
      <StyledSearchResultContainer>
        <SearchResultHeader />
        <SearchResultCardList />
        <SearchResultInfinityScroll />
      </StyledSearchResultContainer>
    </StyledSearch>
  );
}
