import { addCommas } from '../../../utils/common/addCommas';
import { useQueryParams } from '../../../utils/hooks';
import useSearchResult from '../../../utils/hooks/useSearchResult/useSearchResult';

import { StyledSearchResultHeader } from './styles';

export default function SearchResultHeader() {
  const { queryString } = useQueryParams('q');
  const { data } = useSearchResult(queryString as string);

  const totalCount = data?.pages[0].data.total_count;

  return (
    <StyledSearchResultHeader>
      총 {addCommas(totalCount || 0)}건의 검색 결과
    </StyledSearchResultHeader>
  );
}
