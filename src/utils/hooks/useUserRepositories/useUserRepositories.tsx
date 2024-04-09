import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { repositoryCache } from '../../models';

import RepositoryService from '../../services/Repository.service';

export default function useUserRepositories(username: string) {
  return useInfiniteQuery(
    repositoryCache.getPagenatedUserRepositories(username),
    ({ pageParam = 1 }: QueryFunctionContext) =>
      RepositoryService.getPagenatedUserRepositories(username, pageParam),
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
