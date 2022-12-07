import { useCallback, useState } from 'react';
import BookmarkService from '../../../utils/services/Bookmark.service';

export default function useBookmark() {
  const [bookmarks, setBookmarks] = useState(
    BookmarkService.getBookmarks() || [],
  );
  const [totalCount, setTotalCount] = useState(BookmarkService.getTotalCount());

  const handleBookmarkCancel = useCallback((userId: number) => {
    setBookmarks((currentState) =>
      currentState.filter(({ id }) => id !== userId),
    );

    BookmarkService.removeBookmark(userId);
    setTotalCount(BookmarkService.getTotalCount());
  }, []);

  return { bookmarks, totalCount, handleBookmarkCancel };
}
