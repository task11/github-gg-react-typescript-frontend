import Icons from '../../../../components/Icons';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
  StyledResultWrapper,
  StyledWithoutResult,
} from './SearchResultList.style';

interface Props {
  searchQuery: string;
}

export default function SearchResultList({ searchQuery }: Props) {
  if (true) {
    return (
      <StyledWithoutResult>
        <span>검색 결과가 없습니다.</span>
      </StyledWithoutResult>
    );
  }
  return (
    <StyledResultWrapper>
      {!!searchQuery && (
        <StyledResultColumn>
          <StyledIconWrapper>
            <Icons.Search />
          </StyledIconWrapper>
          <StyledMatchWord>{searchQuery}</StyledMatchWord>
        </StyledResultColumn>
      )}
      <div className="recommend-title">추천 검색어</div>
      <StyledResultColumn>
        <StyledIconWrapper>
          <Icons.Search />
        </StyledIconWrapper>
        <StyledMatchWord>task11</StyledMatchWord>
      </StyledResultColumn>
    </StyledResultWrapper>
  );
}
