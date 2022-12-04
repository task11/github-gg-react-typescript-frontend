import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { searchCache } from '../../../utils/models';

import SearchService from '../../../utils/services/Search.service';

export default function useSearchResult(query: string, page: number) {
  return useInfiniteQuery(
    searchCache.getUsersBySearchResult(query),
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
