import Avatar from '../../Avatar';
import Icons from '../../Icons';

import { QueryDataProps, SearchUserProps } from '../../../types';

import { StyledResultCard, StyledResultInfo } from './styles';

interface Props {
  result: SearchUserProps;
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
