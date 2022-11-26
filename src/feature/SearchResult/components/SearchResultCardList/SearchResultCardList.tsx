import { QueryDataProps } from '../../../../types/queryData';
import { UserProps } from '../../../../types/user';
import SearchResultCard from '../SearchResultCard/SearchResultCard';

import { StyledResultCardList } from './SearchResultCardList.style';

interface Props {
  searchResult: UserProps[];
  onSearchQuery: (queryData: QueryDataProps) => void;
}

export default function SearchResultCardList({
  searchResult,
  onSearchQuery,
}: Props) {
  return (
    <StyledResultCardList>
      {searchResult.map((result, idx) => (
        <SearchResultCard
          key={idx}
          result={result}
          onSearchQuery={onSearchQuery}
        />
      ))}
    </StyledResultCardList>
  );
}
