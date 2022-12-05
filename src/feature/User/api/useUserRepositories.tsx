import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { userCache } from '../../../utils/models';

import UserService from '../../../utils/services/User.service';

export default function useUserRepositories(username: string) {
  return useInfiniteQuery(
    userCache.getUserRepositories(username),
    ({ pageParam = 1 }: QueryFunctionContext) =>
      UserService.getUserRepositories(username, pageParam),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
      enabled: !!username,
      getNextPageParam: (lastPage, allPages) =>
        !lastPage.data.length ? undefined : allPages.length + 1,
    },
  );
}
