import Avatar from '../../../../components/Avatar/Avatar';
import { QueryDataProps } from '../../../../types/queryData';

import { StyledRecentItem } from './SearchRecentList.style';

interface Props {
  recent: QueryDataProps;
  onSearchQuery: (queryData: QueryDataProps) => void;
  navigateToSearhDetail: (query: string) => void;
}

export default function SearchRecentItem({
  recent,
  onSearchQuery,
  navigateToSearhDetail,
}: Props) {
  const { id, avatarUrl, username } = recent;

  const handleSearchRecentItem = () => {
    if (id) {
      onSearchQuery({ id, avatarUrl, username });
    } else {
      navigateToSearhDetail(username);
    }
  };

  return (
    <StyledRecentItem onMouseDown={handleSearchRecentItem}>
      {avatarUrl && <Avatar src={avatarUrl} size="sm" />}
      {username}
    </StyledRecentItem>
  );
}
