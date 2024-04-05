import { useQuery } from '@tanstack/react-query';

import { userCache } from '../../models';

import UserService from '../../services/User.service';

export default function useUser(username: string) {
  const getUserByQuery = async () => {
    return (await UserService.getUser(username)).data;
  };

  return useQuery(userCache.getUser(username), getUserByQuery, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    staleTime: 60000,
    enabled: !!username,
  });
}
