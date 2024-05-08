import { useCallback, useEffect, useState } from 'react';

import BookmarkService from '../../services/Bookmark.service';

export default function useToggleBookmark(userId: number | undefined) {
  const [isBookmark, setIsBoomark] = useState(false);

  useEffect(() => {
    if (userId !== undefined) {
      setIsBoomark(!!BookmarkService.getBookmark(userId));
    }
  }, [userId]);

  const toggleBookmark = useCallback(() => {
    if (userId !== undefined) {
      setIsBoomark((currentState) => !currentState);
    }
  }, [userId]);

  return { isBookmark, toggleBookmark };
}
