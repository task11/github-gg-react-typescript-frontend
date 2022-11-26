import { renderHook, waitFor } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useSearch from '../useSearch';

const queryClient = new QueryClient();

const expectedResponse = {
  incomplete_results: false,
  items: [
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/57589937?v=4',
      events_url: 'https://api.github.com/users/cmg1411/events{/privacy}',
      followers_url: 'https://api.github.com/users/cmg1411/followers',
      following_url:
        'https://api.github.com/users/cmg1411/following{/other_user}',
      gists_url: 'https://api.github.com/users/cmg1411/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/cmg1411',
      id: 57589937,
      login: 'cmg1411',
      node_id: 'MDQ6VXNlcjU3NTg5OTM3',
      organizations_url: 'https://api.github.com/users/cmg1411/orgs',
      received_events_url:
        'https://api.github.com/users/cmg1411/received_events',
      repos_url: 'https://api.github.com/users/cmg1411/repos',
      score: 1,
      site_admin: false,
      starred_url:
        'https://api.github.com/users/cmg1411/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/cmg1411/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/cmg1411',
    },
  ],
  total_count: 1,
};

const expectedNoResultResponse = {
  incomplete_results: false,
  items: [],
  total_count: 0,
};

describe('UseSearch', () => {
  const renderer = (query: string) => {
    const { result } = renderHook(() => useSearch(query), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    return result;
  };

  it('Calls react query for expected response', async () => {
    const result = renderer('cmg1411');

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(expectedResponse);
  });

  it('Calls react query expected without result', async () => {
    const result = renderer('123asdjaisfjqwklrnqlk');

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(expectedNoResultResponse);
  });
});
