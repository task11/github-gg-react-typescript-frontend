import BookmarkItem from '../BookmarkItem/BookmarkItem';

import { QueryDataPropsList } from '../../../../types';

import { StyledBookmarkGrid } from './BookmarkGrid.style';

interface Props {
  bookmarks: QueryDataPropsList;
  handleBookmarkCancel: (userId: number) => void;
  navigateBookmarkUser: (username: string) => void;
}

export default function BookmarkGrid({
  bookmarks,
  handleBookmarkCancel,
  navigateBookmarkUser,
}: Props) {
  return (
    <StyledBookmarkGrid>
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          handleBookmarkCancel={handleBookmarkCancel}
          navigateBookmarkUser={navigateBookmarkUser}
        />
      ))}
    </StyledBookmarkGrid>
  );
}
