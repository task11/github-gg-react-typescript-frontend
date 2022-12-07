import { useNavigate } from 'react-router-dom';

import useBookmark from '../hooks/useBookmark';

import BookmarkGrid from './BookmarkGrid/BookmarkGrid';
import BookmarkHeader from './BookmarkHeader/BookmarkHeader';

import { StyledBookmarkContainer } from './BookmarkContainer.style';

export default function BookmarkContainer() {
  const { bookmarks, totalCount, handleBookmarkCancel } = useBookmark();
  const navigate = useNavigate();

  const navigateBookmarkUser = (username: string) => {
    navigate(`/user/${username}`);
  };

  return (
    <StyledBookmarkContainer>
      <BookmarkHeader totalCount={totalCount} />
      <BookmarkGrid
        bookmarks={bookmarks}
        handleBookmarkCancel={handleBookmarkCancel}
        navigateBookmarkUser={navigateBookmarkUser}
      />
    </StyledBookmarkContainer>
  );
}
