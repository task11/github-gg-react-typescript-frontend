import SearchRecentList from '../SearchRecentList/SearchRecentList';
import SearchResultList from '../SearchResultList/SearchResultList';

import { StyledSearchResult } from './SearchResult.style';

interface Props {
  searchQuery: string;
  onSearchQuery: (query: string) => void;
}

export default function SearchResult({ searchQuery, onSearchQuery }: Props) {
  if (searchQuery.length === 0) {
    return <></>;
  }
  return (
    <StyledSearchResult>
      <SearchResultList
        searchQuery={searchQuery}
        onSearchQuery={onSearchQuery}
      />
      <SearchRecentList onSearchQuery={onSearchQuery} />
    </StyledSearchResult>
  );
}
