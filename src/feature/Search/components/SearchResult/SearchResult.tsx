import SearchRecentList from '../SearchRecentList/SearchRecentList';
import SearchResultList from '../SearchResultList/SearchResultList';

import { StyledSearchResult } from './SearchResult.style';

interface Props {
  isSearching: boolean;
  searchQuery: string;
}

export default function SearchResult({ isSearching, searchQuery }: Props) {
  if (!isSearching) {
    return <></>;
  }
  return (
    <StyledSearchResult>
      <SearchResultList searchQuery={searchQuery} />
      <SearchRecentList />
    </StyledSearchResult>
  );
}
