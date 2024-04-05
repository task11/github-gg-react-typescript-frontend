import { useCallback, useState } from 'react';

import BookmarkService from '../../services/Bookmark.service';

export default function useToggleBookmark(userId: number) {
  const [isBookmark, setIsBoomark] = useState(
    !!BookmarkService.getBookmark(userId),
  );

  const toggleBookmark = useCallback(() => {
    setIsBoomark((currentState) => !currentState);
  }, [isBookmark]);

  return { isBookmark, toggleBookmark };
}
