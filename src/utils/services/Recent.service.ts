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

    this.lengthCheck(dataWithoutDuplicate);
    this.arrayResize(dataWithoutDuplicate);

    LocalService.set('recentQuery', [...dataWithoutDuplicate, data]);
  }

  removeDuplicate(currentData: QueryDataPropsList, data: QueryDataProps) {
    return currentData.filter(({ username }) => username !== data.username);
  }

  lengthCheck(data: QueryDataPropsList) {
    if (data.length > this.maxLength) {
      data.shift();
    }
  }

  arrayResize(data: QueryDataPropsList) {
    if (data.length > this.maxLength) {
      data.shift();
    }
  }
}

export default new RecentQueryService();
