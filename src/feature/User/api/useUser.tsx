import { useQuery } from '@tanstack/react-query';

import { userCache } from '../../../utils/models';

import UserService from '../../../utils/services/User.service';

export default function useUserInfo(username: string) {
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
