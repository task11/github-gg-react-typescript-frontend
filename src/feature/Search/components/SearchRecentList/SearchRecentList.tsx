import {
  StyledRecentItem,
  StyledRecentSearch,
  StyledRecentSearchWrapper,
} from './SearchRecentList.style';

export default function SearchRecentList() {
  return (
    <StyledRecentSearchWrapper>
      <div className="recent-title">최근 검색어</div>
      <StyledRecentSearch>
        <StyledRecentItem>2a11</StyledRecentItem>
        <StyledRecentItem>task2</StyledRecentItem>
        <StyledRecentItem>task4</StyledRecentItem>
        <StyledRecentItem>task15</StyledRecentItem>
      </StyledRecentSearch>
    </StyledRecentSearchWrapper>
  );
}
