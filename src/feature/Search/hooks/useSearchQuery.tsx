import React, { useState } from 'react';

export default function useSearchQuery() {
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

  return {
    searchQuery,
    isSearching,
    setIsFocus,
    handleSearchQuery,
    initSearchQuery,
  };
}
