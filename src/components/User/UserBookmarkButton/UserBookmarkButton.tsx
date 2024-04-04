import Icons from '../../Icons';

import { QueryDataProps } from '../../../types';

import { StyledBookmark } from './styles';

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
    <StyledBookmark data-testid="bookmarkButton" onClick={handleBookmarkClick}>
      {isBookmark ? <Icons.FilledBookmark /> : <Icons.OutlineBookmark />}
    </StyledBookmark>
  );
}
