import { QueryDataProps, QueryDataPropsList } from '../../types';

import LocalService from './Local.service';

class RecentQueryService {
  maxLength = 3;

  get(): QueryDataPropsList | null {
    const data: QueryDataPropsList | null = LocalService.get('recentQuery');
    if (!data) {
      return null;
    }

    return data;
  }

  set(data: QueryDataProps) {
    const currentData: QueryDataPropsList | null =
      LocalService.get('recentQuery');

    if (!currentData) {
      LocalService.set('recentQuery', [data]);
      return;
    }

    const dataWithoutDuplicate = this.removeDuplicate(currentData, data);

    this.arrayResize(dataWithoutDuplicate);

    LocalService.set('recentQuery', [data, ...dataWithoutDuplicate]);
  }

  removeDuplicate(currentData: QueryDataPropsList, data: QueryDataProps) {
    return currentData.filter(({ username }) => username !== data.username);
  }

  arrayResize(data: QueryDataPropsList) {
    if (data.length > this.maxLength) {
      data.pop();
    }
  }
}

export default new RecentQueryService();
