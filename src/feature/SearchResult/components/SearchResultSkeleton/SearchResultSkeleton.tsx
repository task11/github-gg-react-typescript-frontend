import {
  StyledSearchCardListWrapper,
  StyledSearchCardSekeleton,
  StyledSearchResultHeaderSekeleton,
  StyledSearchResultWrapper,
} from './SearchResultSkeleton.style';

export default function SearchResultSkeleton() {
  return (
    <StyledSearchResultWrapper>
      <StyledSearchResultHeaderSekeleton />
      <StyledSearchCardListWrapper>
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
        <StyledSearchCardSekeleton />
      </StyledSearchCardListWrapper>
    </StyledSearchResultWrapper>
  );
}
