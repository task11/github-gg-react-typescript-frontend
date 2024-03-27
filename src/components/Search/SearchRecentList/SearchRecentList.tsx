import SearchRecentItem from '../SearchRecentItem';

import RecentService from '../../../utils/services/Recent.service';

import { QueryDataProps } from '../../../types/queryData';

import { StyledRecentSearch, StyledRecentSearchWrapper } from './styles';

interface Props {
  onSearchQuery: (queryData: QueryDataProps) => void;
  navigateToSearhDetail: (query: string) => void;
}

export default function SearchRecentList({
  onSearchQuery,
  navigateToSearhDetail,
}: Props) {
  const recentList = RecentService.get();

  if (!recentList) {
    return <></>;
  }

  return (
    <StyledRecentSearchWrapper>
      <div className="recent-title">최근 검색어</div>
      <StyledRecentSearch>
        {recentList.map((recent, idx) => (
          <SearchRecentItem
            key={idx}
            recent={recent}
            onSearchQuery={onSearchQuery}
            navigateToSearhDetail={navigateToSearhDetail}
          />
        ))}
      </StyledRecentSearch>
    </StyledRecentSearchWrapper>
  );
}
