import Avatar from '../../Avatar';
import Icons from '../../Icons';

import { QueryDataProps } from '../../../types';

import {
  StyledBookmarkCancel,
  StyledBookmarkCard,
  StyledBookmarkInfo,
} from './styles';

interface Props {
  bookmark: QueryDataProps;
  handleBookmarkCancel: (userId: number) => void;
  navigateBookmarkUser: (username: string) => void;
}

export default function BookmarkItem({
  bookmark,
  handleBookmarkCancel,
  navigateBookmarkUser,
}: Props) {
  return (
    <StyledBookmarkCard>
      <StyledBookmarkInfo
        onClick={() => navigateBookmarkUser(bookmark.username)}
      >
        <Avatar src={bookmark.avatarUrl as string} size="md" />
        <span>{bookmark.username}</span>
      </StyledBookmarkInfo>
      <StyledBookmarkCancel
        onClick={() => handleBookmarkCancel(bookmark.id as number)}
      >
        <Icons.Close />
      </StyledBookmarkCancel>
    </StyledBookmarkCard>
  );
}
