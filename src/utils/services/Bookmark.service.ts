import { QueryDataProps, QueryDataPropsList } from '../../types';

import LocalService from './Local.service';

class BookmarkService {
  maxLength = 8;

  getBookmarks(): QueryDataPropsList | null {
    const data: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!data) {
      return null;
    }

    return data;
  }

  getBookmark(userId: number) {
    const data: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!data) {
      return null;
    }

    const [user] = data.filter(({ id }) => userId === id);

    return user;
  }

  set(data: QueryDataProps) {
    const currentData: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!currentData) {
      LocalService.set('bookmark', [data]);
      return;
    }

    const isDuplicate = currentData.some(({ id }) => data.id === id);

    if (isDuplicate) {
      const dataWithoutDuplicate = currentData.filter(
        ({ username }) => username !== data.username,
      );

      LocalService.set('bookmark', dataWithoutDuplicate);
      return;
    }

    this.arrayResize(currentData);

    LocalService.set('bookmark', [...currentData, data]);
  }

  removeBookmark(userId: number) {
    const currentData: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!currentData) {
      return null;
    }
    const newData = currentData.filter(({ id }) => id !== userId);

    LocalService.set('bookmark', newData);
  }

  getTotalCount() {
    const data: QueryDataPropsList | null = LocalService.get('bookmark');

    if (!data) {
      return 0;
    }

    return data.length;
  }

  arrayResize(data: QueryDataPropsList) {
    if (data.length > this.maxLength) {
      data.pop();
    }
  }
}

export default new BookmarkService();
