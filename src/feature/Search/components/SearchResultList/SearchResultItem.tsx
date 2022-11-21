import Icons from '../../../../components/Icons';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
} from './SearchResultList.style';

interface Props {
  onSearchQuery: (query: string) => void;
}

export default function SearchResultItem({ onSearchQuery }: Props) {
  return (
    <StyledResultColumn onMouseDown={() => onSearchQuery('task11')}>
      <StyledIconWrapper>
        <Icons.Search />
      </StyledIconWrapper>
      <StyledMatchWord>task11</StyledMatchWord>
    </StyledResultColumn>
  );
}
