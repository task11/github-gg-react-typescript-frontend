import { useState } from 'react';
import { StyledSearchContainer } from './SearchContainer.style';

import SearchForm from './SearchForm/SearchForm';
import SearchHeader from './SearchHeader/SearchHeader';
import SearchResult from './SearchResult/SearchResult';

export default function SearchContainer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const isSearching = searchQuery !== '' || isFocus;

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setSearchQuery(value);
  };

  const initSearchQuery = () => {
    setSearchQuery('');
  };

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
