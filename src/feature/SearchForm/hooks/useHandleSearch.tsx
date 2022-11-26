import React from 'react';
import { useNavigate } from 'react-router-dom';

import { QueryDataProps } from '../../../types/queryData';

import RecentService from '../../../utils/services/Recent.service';

export default function useHandleSearch(searchQuery: string) {
  const navigate = useNavigate();

  const onSearchQuery = (queryData: QueryDataProps) => {
    const { id } = queryData;

    RecentService.set(queryData);
    navigate(`/user/${id}`);
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
