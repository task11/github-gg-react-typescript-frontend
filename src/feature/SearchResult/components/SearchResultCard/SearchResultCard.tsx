import Avatar from '../../../../components/Avatar/Avatar';
import Icons from '../../../../components/Icons';

import { QueryDataProps } from '../../../../types/queryData';
import { UserProps } from '../../../../types/user';

import { StyledResultCard, StyledResultInfo } from './SearchResultCard.style';

interface Props {
  result: UserProps;
  onSearchQuery: (queryData: QueryDataProps) => void;
}

export default function SearchResultCard({ result, onSearchQuery }: Props) {
  const { id, avatar_url: avatarUrl, login: username } = result;

  return (
    <StyledResultCard
      onClick={() => onSearchQuery({ id, avatarUrl, username })}
    >
      <StyledResultInfo>
        <Avatar src={avatarUrl} size="md" />
        {username}
      </StyledResultInfo>
      <Icons.Search />
    </StyledResultCard>
  );
}
