import { useSearchParams } from 'react-router-dom';

export function useQueryParams(query: string) {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get(query);

  return { queryString };
}
