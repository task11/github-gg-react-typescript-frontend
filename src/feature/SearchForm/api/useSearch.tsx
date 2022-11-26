import { useQuery } from '@tanstack/react-query';

import { userCache } from '../../../utils/models/userCache';

import SearchService from '../../../utils/services/Search.service';

export default function useSearch(query: string) {
  const getUsersByQuery = async () => {
    return (await SearchService.getSearchFormList(query)).data;
  };

  return useQuery(userCache.getUsersByQuery(query, 1), getUsersByQuery, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    staleTime: 60000,
    enabled: !!query,
  });
}
