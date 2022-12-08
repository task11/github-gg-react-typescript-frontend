import SearchRecentList from '../SearchRecentList/SearchRecentList';
import SearchResultList from '../SearchResultList/SearchResultList';

import { QueryDataProps, SearchUserProps } from '../../../../types';

import { StyledSearchResult } from './SearchResult.style';

interface Props {
  isSearching: boolean;
  isError: boolean;
  searchQuery: string;
  searchResult: SearchUserProps[] | undefined;
  onSearchQuery: (queryData: QueryDataProps) => void;
  navigateToSearhDetail: (query: string) => void;
}

export default function SearchResult({
  isSearching,
  isError,
  searchQuery,
  searchResult,
  onSearchQuery,
  navigateToSearhDetail,
}: Props) {
  if (!isSearching) {
    return <></>;
  }

  return (
    <StyledSearchResult>
      <SearchResultList
        searchQuery={searchQuery}
        searchResult={searchResult}
        isError={isError}
        onSearchQuery={onSearchQuery}
      />
      <SearchRecentList
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />
    </StyledSearchResult>
  );
}
