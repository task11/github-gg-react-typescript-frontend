import { useNavigate } from 'react-router-dom';
import useBookmark from '../../utils/hooks/useBookmark';

import BookmarkHeader from '../../components/Bookmark/BookmarkHeader';
import BookmarkGrid from '../../components/Bookmark/BookmarkGrid';

import { StyledBookmark, StyledBookmarkContainer } from './styles';

export default function BookmarkPage() {
  const { bookmarks, totalCount, handleBookmarkCancel } = useBookmark();
  const navigate = useNavigate();

  const navigateBookmarkUser = (username: string) => {
    navigate(`/user/${username}`);
  };

  return (
    <StyledBookmark>
      <StyledBookmarkContainer>
        <BookmarkHeader totalCount={totalCount} />
        <BookmarkGrid
          bookmarks={bookmarks}
          handleBookmarkCancel={handleBookmarkCancel}
          navigateBookmarkUser={navigateBookmarkUser}
        />
      </StyledBookmarkContainer>
    </StyledBookmark>
  );
}
