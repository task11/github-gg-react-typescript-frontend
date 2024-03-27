import SearchForm from '../../components/Search/SearchForm';
import SearchHeader from '../../components/Search/SearchHeader';
import SearchResultSummary from '../../components/Search/SearchResultSummary';

import { StyledHome, StyledSearchFormContainer } from './styles';

export default function HomePage() {
  return (
    <StyledHome>
      <StyledSearchFormContainer>
        <SearchHeader />
        <SearchForm />
        <SearchResultSummary />
      </StyledSearchFormContainer>
    </StyledHome>
  );
}
