import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderHook, waitFor } from '@testing-library/react';

import useUserRepositories from '../useUserRepositories';

const queryClient = new QueryClient();

describe('useUserRepositories', () => {
  const renderer = (username: string) => {
    const { result } = renderHook(() => useUserRepositories(username), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    return result;
  };

  it('Calls success query', async () => {
    const result = renderer('task11');

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
