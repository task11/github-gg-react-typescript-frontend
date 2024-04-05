import SearchLogo from '../../Icons/SearchLogo';

import { StyledHeader, StyledSearchHeader } from './styles';

export default function SearchHeader() {
  return (
    <StyledSearchHeader>
      <SearchLogo />
      <StyledHeader>Search for GitHub users</StyledHeader>
    </StyledSearchHeader>
  );
}
