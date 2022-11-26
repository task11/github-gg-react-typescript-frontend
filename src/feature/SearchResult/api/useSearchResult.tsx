import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { userCache } from '../../../utils/models/userCache';

import SearchService from '../../../utils/services/Search.service';

export default function useFetchSearchResult(query: string, page: number) {
  return useInfiniteQuery(
    userCache.getUsersByQueryPagenation(query),
    ({ pageParam = page }: QueryFunctionContext) =>
      SearchService.getSearchResultList(query, pageParam),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
      enabled: !!query && !!page,
      getNextPageParam: ({ data: { items } }) =>
        !items.length ? undefined : page + 1,
    },
  );
}
