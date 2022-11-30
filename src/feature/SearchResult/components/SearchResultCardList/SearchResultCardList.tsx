import { QueryDataProps, SearchUserProps } from '../../../../types';

import SearchResultCard from '../SearchResultCard/SearchResultCard';

import { StyledResultCardList } from './SearchResultCardList.style';

interface Props {
  searchResult: SearchUserProps[];
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
