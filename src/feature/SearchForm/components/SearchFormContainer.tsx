import useSearchQuery from '../hooks/useSearchQuery';
import useHandleSearch from '../hooks/useHandleSearch';
import { useDebounce } from '../../../utils/hooks';

import useSearch from '../api/useSearch';

import SearchForm from './SearchForm/SearchForm';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchResult from './SearchResult/SearchResult';

import { StyledSearchFormContainer } from './SearchFormContainer.style';

export default function SearchFormContainer() {
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
  const { data, isError } = useSearch(debounceSearchQuery);

  return (
    <StyledSearchFormContainer>
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
        isError={isError}
        searchQuery={searchQuery}
        searchResult={data?.items}
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />
    </StyledSearchFormContainer>
  );
}
