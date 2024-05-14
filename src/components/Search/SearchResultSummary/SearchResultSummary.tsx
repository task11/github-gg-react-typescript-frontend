import { useAtomValue } from 'jotai';

import { searchQueryAtom } from '../../../atoms/searchQuery';

import SearchRecentList from '../SearchRecentList';
import SearchResultList from '../SearchResultList';

import useSearchQuery from '../../../utils/hooks/useSearchQuery';
import useHandleSearch from '../../../utils/hooks/useHandleSearch';
import useDebounce from '../../../utils/hooks/useDebounce';
import useSearch from '../../../utils/hooks/useSearch';

import { StyledSearchResult } from './styles';

export default function SearchResultSummary() {
  const searchQuery = useAtomValue(searchQueryAtom);

  const { isSearching } = useSearchQuery();

  const { onSearchQuery, navigateToSearhDetail } = useHandleSearch();

  const debounceSearchQuery = useDebounce(searchQuery, 500);
  const { data, isError } = useSearch(debounceSearchQuery);

  if (!isSearching) {
    return <></>;
  }

  return (
    <StyledSearchResult>
      <SearchResultList
        searchQuery={searchQuery}
        searchResult={data?.items}
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
