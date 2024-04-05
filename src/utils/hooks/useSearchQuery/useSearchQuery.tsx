import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryAtom } from '../../../store';

export default function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
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
