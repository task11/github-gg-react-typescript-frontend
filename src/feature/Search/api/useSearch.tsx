import { useQuery } from '@tanstack/react-query';

import server from '../../../lib/axios';

import { SearchUserResponseProps } from '../../../types/user';
import { userCache } from '../../../utils/models/userCache';

export default function useSearch(query: string) {
  const getUsersByQuery = async () => {
    return (
      await server.get<SearchUserResponseProps>(
        `/search/users?q=${query}&per_page=5&page=1`,
      )
    ).data;
  };

  return useQuery(userCache.getUsersByQuery(query), getUsersByQuery, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    staleTime: 60000,
    enabled: !!query,
  });
}
