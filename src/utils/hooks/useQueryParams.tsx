import { useSearchParams } from 'react-router-dom';

export default function useQueryParams() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // test

  return { query };
}
