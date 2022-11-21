import useSearchQuery from '../hooks/useSearchQuery';

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

  const onSearchQuery = (query: string) => {
    console.log(query);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchQuery(searchQuery);
  };

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
        onSearchQuery={onSearchQuery}
      />
    </StyledSearchContainer>
  );
}
