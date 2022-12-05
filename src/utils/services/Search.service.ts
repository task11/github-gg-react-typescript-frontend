import server from '../../lib/axios';

import { SearchUserResponseProps } from '../../types';

class SearchService {
  getSearchFormList(query: string) {
    return server.get<SearchUserResponseProps>(`/search/users`, {
      params: {
        q: query,
        per_page: 5,
        page: 1,
      },
    });
  }

  getSearchResultList(query: string, page: number) {
    return server.get<SearchUserResponseProps>(`/search/users`, {
      params: {
        q: query,
        per_page: 8,
        page,
      },
    });
  }
}

export default new SearchService();
