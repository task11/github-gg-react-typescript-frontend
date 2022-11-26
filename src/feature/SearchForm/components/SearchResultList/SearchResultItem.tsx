import Avatar from '../../../../components/Avatar/Avatar';
import Icons from '../../../../components/Icons';

import { QueryDataProps, SearchUserProps } from '../../../../types';

import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface Props {
  result: SearchUserProps;
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
