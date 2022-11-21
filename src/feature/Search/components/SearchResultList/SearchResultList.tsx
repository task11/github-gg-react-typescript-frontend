import Icons from '../../../../components/Icons';
import SearchResultItem from './SearchResultItem';
import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
  StyledResultWrapper,
  StyledWithoutResult,
} from './SearchResultList.style';

interface Props {
  searchQuery: string;
  onSearchQuery: (query: string) => void;
}

export default function SearchResultList({
  searchQuery,
  onSearchQuery,
}: Props) {
  if (false) {
    return (
      <StyledWithoutResult>
        <span>검색 결과가 없습니다.</span>
      </StyledWithoutResult>
    );
  }
  return (
    <StyledResultWrapper>
      {searchQuery.length > 0 && (
        <StyledResultColumn onClick={() => onSearchQuery(searchQuery)}>
          <StyledIconWrapper>
            <Icons.Search />
          </StyledIconWrapper>
          <StyledMatchWord>{searchQuery}</StyledMatchWord>
        </StyledResultColumn>
      )}
      <div className="recommend-title">추천 검색어</div>
      <SearchResultItem onSearchQuery={onSearchQuery} />
    </StyledResultWrapper>
  );
}
