import SearchRecentList from '../SearchRecentList/SearchRecentList';
import SearchResultList from '../SearchResultList/SearchResultList';

import { StyledSearchResult } from './SearchResult.style';

interface Props {
  isSearching: boolean;
  searchQuery: string;
  onSearchQuery: (query: string) => void;
}

export default function SearchResult({
  isSearching,
  searchQuery,
  onSearchQuery,
}: Props) {
  if (!isSearching) {
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
