import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderHook, waitFor } from '@testing-library/react';

import useUser from '../useUser';

const queryClient = new QueryClient();

describe('useUser', () => {
  const renderer = (username: string) => {
    const { result } = renderHook(() => useUser(username), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    return result;
  };

  it('Calls react query for expected response', async () => {
    const result = renderer('task11');

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
