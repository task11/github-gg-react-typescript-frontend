import { addCommas } from '../../../../utils/common/addCommas';

import { StyledSearchResultHeader } from './SearchResultHeader.style';

interface Props {
  totalCount: number;
}

export default function SearchResultHeader({ totalCount }: Props) {
  return (
    <StyledSearchResultHeader>
      총 {addCommas(totalCount)}건의 검색 결과
    </StyledSearchResultHeader>
  );
}
