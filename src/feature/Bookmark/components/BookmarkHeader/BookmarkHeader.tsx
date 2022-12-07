import { StyledBookmarkHeader } from './BookmarkHeader.style';

interface Props {
  totalCount: number;
}

export default function BookmarkHeader({ totalCount }: Props) {
  return <StyledBookmarkHeader>{totalCount} 개의 북마크</StyledBookmarkHeader>;
}
