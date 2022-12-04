import { useQuery } from '@tanstack/react-query';

import { searchCache } from '../../../utils/models';

import SearchService from '../../../utils/services/Search.service';

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
