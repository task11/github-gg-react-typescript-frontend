import { QueryDataProps, QueryDataPropsList } from '../../types';

import LocalService from './Local.service';

class BookmarkService {
  maxLength = 20;

  get(): QueryDataPropsList | null {
    const data: QueryDataPropsList | null = LocalService.get('bookmark');
    if (!data) {
      return null;
    }

    return data;
  }

  set(data: QueryDataProps) {
    const currentData: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!currentData) {
      LocalService.set('bookmark', [data]);
      return;
    }

    const dataWithoutDuplicate = this.removeDuplicate(currentData, data);

    this.lengthCheck(dataWithoutDuplicate);
    this.arrayResize(dataWithoutDuplicate);

    LocalService.set('bookmark', [...dataWithoutDuplicate, data]);
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

export default new BookmarkService();
