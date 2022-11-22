import { QueryDataProps, QueryDataPropsList } from '../../types/queryData';

import LocalService from './Local.service';

class RecentQueryService {
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

    this.lengthCheck(dataWithoutDuplicate);
    this.arrayResize(dataWithoutDuplicate);

    LocalService.set('recentQuery', [...dataWithoutDuplicate, data]);
  }

  removeDuplicate(currentData: QueryDataPropsList, data: QueryDataProps) {
    return currentData.filter(({ username }) => username !== data.username);
  }

  lengthCheck(data: QueryDataPropsList) {
    if (data.length > 3) {
      data.shift();
    }
  }

  arrayResize(data: QueryDataPropsList) {
    if (data.length > 3) {
      data.shift();
    }
  }
}

export default new RecentQueryService();
