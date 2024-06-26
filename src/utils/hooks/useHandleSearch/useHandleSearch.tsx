import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAtomValue } from 'jotai';

import { searchQueryAtom } from '../../../atoms/searchQuery';

import { QueryDataProps } from '../../../types/queryData';

import RecentService from '../../services/Recent.service';

export default function useHandleSearch() {
  const searchQuery = useAtomValue(searchQueryAtom);

  const navigate = useNavigate();

  const onSearchQuery = (queryData: QueryDataProps) => {
    const { username } = queryData;

    RecentService.set(queryData);
    navigate(`/user/${username}`);
  };

  const navigateToSearhDetail = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery === '') {
      return;
    }

    RecentService.set({ username: searchQuery });
    navigateToSearhDetail(searchQuery);
  };
  return { onSearchQuery, handleSubmit, navigateToSearhDetail };
}
