import SearchRecentItem from './SearchRecentItem';
import {
  StyledRecentItem,
  StyledRecentSearch,
  StyledRecentSearchWrapper,
} from './SearchRecentList.style';

interface Props {
  onSearchQuery: (query: string) => void;
}

export default function SearchRecentList({ onSearchQuery }: Props) {
  return (
    <StyledRecentSearchWrapper>
      <div className="recent-title">최근 검색어</div>
      <StyledRecentSearch>
        <SearchRecentItem onSearchQuery={onSearchQuery} />
      </StyledRecentSearch>
    </StyledRecentSearchWrapper>
  );
}
