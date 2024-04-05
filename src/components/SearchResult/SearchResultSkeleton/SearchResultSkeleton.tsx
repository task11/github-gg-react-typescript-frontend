import {
  StyledSearchCardListWrapper,
  StyledSearchCardSekeleton,
  StyledSearchResultHeaderSekeleton,
  StyledSearchResultWrapper,
} from './styles';

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
