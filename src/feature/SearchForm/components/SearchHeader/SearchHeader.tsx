import SearchLogo from '../../../../components/Icons/SearchLogo';
import { StyledHeader, StyledSearchHeader } from './SearchHeader.style';

export default function SearchHeader() {
  return (
    <StyledSearchHeader>
      <SearchLogo />
      <StyledHeader>Search for GitHub users</StyledHeader>
    </StyledSearchHeader>
  );
}
