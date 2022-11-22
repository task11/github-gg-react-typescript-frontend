import useSearchQuery from '../hooks/useSearchQuery';
import useHandleSearch from '../hooks/useHandleSearch';
import useDebounce from '../../../utils/hooks/useDebounce';

import useSearch from '../api/useSearch';

import SearchForm from './SearchForm/SearchForm';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchResult from './SearchResult/SearchResult';

import { StyledSearchContainer } from './SearchContainer.style';

export default function SearchContainer() {
  const {
    searchQuery,
    isSearching,
    setIsFocus,
    handleSearchQuery,
    initSearchQuery,
  } = useSearchQuery();

  const { handleSubmit, onSearchQuery, navigateToSearhDetail } =
    useHandleSearch(searchQuery);

  const debounceSearchQuery = useDebounce(searchQuery, 500);
  const { data } = useSearch(debounceSearchQuery);

  return (
    <StyledSearchContainer>
      <SearchHeader />
      <SearchForm
        searchQuery={searchQuery}
        isSearching={isSearching}
        setIsFocus={setIsFocus}
        handleSearchQuery={handleSearchQuery}
        handleSubmit={handleSubmit}
        initSearchQuery={initSearchQuery}
      />
      <SearchResult
        isSearching={isSearching}
        searchQuery={searchQuery}
        searchResult={data?.items}
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />
    </StyledSearchContainer>
  );
}
