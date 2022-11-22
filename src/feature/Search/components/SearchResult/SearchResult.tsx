import SearchRecentList from '../SearchRecentList/SearchRecentList';
import SearchResultList from '../SearchResultList/SearchResultList';

import { UserProps } from '../../../../types/user';
import { QueryDataProps } from '../../../../types/queryData';

import { StyledSearchResult } from './SearchResult.style';

interface Props {
  isSearching: boolean;
  searchQuery: string;
  searchResult: UserProps[] | undefined;
  onSearchQuery: (queryData: QueryDataProps) => void;
  navigateToSearhDetail: (query: string) => void;
}

export default function SearchResult({
  isSearching,
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
        onSearchQuery={onSearchQuery}
      />
      <SearchRecentList
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />
    </StyledSearchResult>
  );
}
