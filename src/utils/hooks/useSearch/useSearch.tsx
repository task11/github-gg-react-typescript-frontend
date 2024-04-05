import { useQuery } from '@tanstack/react-query';

import { searchCache } from '../../models';

import SearchService from '../../services/Search.service';

export default function useSearch(query: string) {
  const getUsersByQuery = async () => {
    return (await SearchService.getSearchFormList(query)).data;
  };

  return useQuery(searchCache.getUsersBySearchForm(query), getUsersByQuery, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    staleTime: 60000,
    enabled: !!query,
  });
}
