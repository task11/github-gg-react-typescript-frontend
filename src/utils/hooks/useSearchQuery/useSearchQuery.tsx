import React, { useState } from 'react';

import { useAtom } from 'jotai';

import { searchQueryAtom } from '../../../atoms/searchQuery';

export default function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [isFocus, setIsFocus] = useState(false);
  const isSearching = searchQuery !== '' || isFocus;

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setSearchQuery(value.trimStart());
  };

  const initSearchQuery = () => {
    setSearchQuery('');
  };

  return {
    isSearching,
    setIsFocus,
    handleSearchQuery,
    initSearchQuery,
  };
}
