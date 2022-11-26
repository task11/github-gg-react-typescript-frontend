import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderHook, waitFor } from '@testing-library/react';

import useSearchResult from '../useSearchResult';

const queryClient = new QueryClient();

describe('UseSearchResult', () => {
  const renderer = (query: string, page: number) => {
    const { result } = renderHook(() => useSearchResult(query, page), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    return result;
  };

  it('Calls react query for expected response page 1', async () => {
    const result = renderer('cmg1411', 1);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it('Calls react query expected without result page 1', async () => {
    const result = renderer('123asdjaisfjqwklrnqlk', 1);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
