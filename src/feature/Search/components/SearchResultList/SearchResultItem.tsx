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
      <img
        style={{ borderRadius: '99%' }}
        width="16px"
        height="16px"
        src={avatarUrl}
        alt="avatar"
      />
      <StyledMatchWord>{username}</StyledMatchWord>
    </StyledResultColumn>
  );
}
