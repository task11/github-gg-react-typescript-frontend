import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { searchCache } from '../../models';

import SearchService from '../../services/Search.service';

export default function useSearchResult(query: string) {
  return useInfiniteQuery(
    searchCache.getUsersBySearchResult(query),
    ({ pageParam = 1 }: QueryFunctionContext) =>
      SearchService.getSearchResultList(query, pageParam),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
      enabled: !!query,
      getNextPageParam: (lastPage, allPages) =>
        !lastPage.data.items.length ? undefined : allPages.length + 1,
    },
  );
}
