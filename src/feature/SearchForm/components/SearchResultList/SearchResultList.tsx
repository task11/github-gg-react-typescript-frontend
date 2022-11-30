import Icons from '../../../../components/Icons';
import SearchResultItem from './SearchResultItem';

import { QueryDataProps, SearchUserProps } from '../../../../types';

import {
  StyledIconWrapper,
  StyledMatchWord,
  StyledResultColumn,
  StyledResultWrapper,
  StyledWithoutResult,
} from './SearchResultList.style';

interface Props {
  searchQuery: string;
  searchResult: SearchUserProps[] | undefined;
  onSearchQuery: (queryData: QueryDataProps) => void;
}

export default function SearchResultList({
  searchQuery,
  searchResult,
  onSearchQuery,
}: Props) {
  if (!searchResult?.length || !searchQuery.length) {
    return (
      <StyledWithoutResult>
        <span>검색 결과가 없습니다.</span>
      </StyledWithoutResult>
    );
  }
  return (
    <StyledResultWrapper>
      {searchQuery.length > 0 && (
        <StyledResultColumn>
          <StyledIconWrapper>
            <Icons.Search />
          </StyledIconWrapper>
          <StyledMatchWord>{searchQuery}</StyledMatchWord>
        </StyledResultColumn>
      )}
      <div className="recommend-title">추천 검색어</div>
      {searchResult.map((result) => (
        <SearchResultItem
          key={result.id}
          result={result}
          onSearchQuery={onSearchQuery}
        />
      ))}
    </StyledResultWrapper>
  );
}
