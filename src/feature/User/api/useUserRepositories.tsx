import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { userCache } from '../../../utils/models';

import UserService from '../../../utils/services/User.service';

export default function useUserRepositories(username: string, page: number) {
  return useInfiniteQuery(
    userCache.getUserRepositories(username),
    ({ pageParam = page }: QueryFunctionContext) =>
      UserService.getUserRepositories(username, pageParam),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
      enabled: !!username && !!page,
      getNextPageParam: ({ data }) => (!data.length ? undefined : page + 1),
    },
  );
}
