import Avatar from '../../../../components/Avatar/Avatar';
import Icons from '../../../../components/Icons';

import { QueryDataProps } from '../../../../types/queryData';
import { UserProps } from '../../../../types/user';

import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface Props {
  result: UserProps;
  onSearchQuery: (queryData: QueryDataProps) => void;
}

export default function SearchResultItem({ result, onSearchQuery }: Props) {
  const { id, avatar_url: avatarUrl, login: username } = result;

  return (
    <StyledResultColumn
      onMouseDown={() => onSearchQuery({ id, avatarUrl, username })}
    >
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      <Avatar src={avatarUrl} size="sm" />
      <StyledMatchWord>{username}</StyledMatchWord>
    </StyledResultColumn>
  );
}
