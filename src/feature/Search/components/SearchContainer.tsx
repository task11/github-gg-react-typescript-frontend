import { useState } from 'react';
import useSearchQuery from '../hooks/useSearchQuery';
import { StyledSearchContainer } from './SearchContainer.style';

import SearchForm from './SearchForm/SearchForm';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchResult from './SearchResult/SearchResult';

export default function SearchContainer() {
  const {
    searchQuery,
    isSearching,
    setIsFocus,
    handleSearchQuery,
    initSearchQuery,
  } = useSearchQuery();

  const onSearchUsers = () => {
    console.log(searchQuery);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchUsers();
  };

  const onSearchQuery = (query: string) => {
    console.log(query);
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
      <SearchResult searchQuery={searchQuery} onSearchQuery={onSearchQuery} />
    </StyledSearchContainer>
  );
}
