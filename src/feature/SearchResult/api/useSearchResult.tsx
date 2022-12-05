import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { searchCache } from '../../../utils/models';

import SearchService from '../../../utils/services/Search.service';

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
