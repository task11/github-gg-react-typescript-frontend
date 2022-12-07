import Icons from '../../../../components/Icons';

import { QueryDataProps } from '../../../../types';

import { StyledBookmark } from './UserBookmarkButton.style';

interface Props {
  bookmarkProps: QueryDataProps;
  isBookmark: boolean;
  handleBookmark: (data: QueryDataProps) => void;
  toggleBookmark: () => void;
}

export default function UserBookmarkButton({
  bookmarkProps,
  isBookmark,
  handleBookmark,
  toggleBookmark,
}: Props) {
  const handleBookmarkClick = () => {
    handleBookmark(bookmarkProps);
    toggleBookmark();
  };
  return (
    <StyledBookmark onClick={handleBookmarkClick}>
      {isBookmark ? <Icons.FilledBookmark /> : <Icons.OutlineBookmark />}
    </StyledBookmark>
  );
}
