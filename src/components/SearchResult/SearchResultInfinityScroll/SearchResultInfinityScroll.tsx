import Error from '../../Error';
import LoadingSpinner from '../../LoadingSpinner';

import useQueryParams from '../../../utils/hooks/useQueryParams';
import useIntersectionObserver from '../../../utils/hooks/useIntersectionObserver';
import useSearchResult from '../../../utils/hooks/useSearchResult';

import { StyledErrorWrapper, StyledTarget } from './styles';

export default function SearchResultInfinityScroll() {
  const { queryString } = useQueryParams('q');
  const { hasNextPage, isFetching, fetchNextPage, isError } = useSearchResult(
    queryString as string,
  );

  const ref = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      {isFetching ? <LoadingSpinner /> : <StyledTarget ref={ref} />}
      {isError && (
        <StyledErrorWrapper>
          <Error />
        </StyledErrorWrapper>
      )}
    </>
  );
}
