import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderHook, waitFor } from '@testing-library/react';

import useUserRepository from '../useUserRepository/useUserRepository';

const queryClient = new QueryClient();

describe('useUserRepository', () => {
  const renderer = (username: string, repositoryname: string) => {
    const { result } = renderHook(
      () => useUserRepository(username, repositoryname),
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      },
    );

    return result;
  };

  it('Calls success query', async () => {
    const result = renderer('task11', 'madup-wanted-AD-board');

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
