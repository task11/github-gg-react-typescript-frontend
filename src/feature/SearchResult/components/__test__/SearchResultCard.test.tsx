import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from '../../../../styles';
import { QueryDataProps, SearchUserProps } from '../../../../types';

import SearchResultCard from '../SearchResultCard/SearchResultCard';

const queryClient = new QueryClient();

const expectedData = {
  login: 'task11',
  id: 89209626,
  node_id: 'MDQ6VXNlcjg5MjA5NjI2',
  avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/task11',
  html_url: 'https://github.com/task11',
  followers_url: 'https://api.github.com/users/task11/followers',
  following_url: 'https://api.github.com/users/task11/following{/other_user}',
  gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
  organizations_url: 'https://api.github.com/users/task11/orgs',
  repos_url: 'https://api.github.com/users/task11/repos',
  events_url: 'https://api.github.com/users/task11/events{/privacy}',
  received_events_url: 'https://api.github.com/users/task11/received_events',
  type: 'User',
  site_admin: false,
  score: 1,
};

describe('SearchResultCard', () => {
  const handleQuery = jest.fn();

  const renderer = (
    items: SearchUserProps,
    onSearchQuery: (queryData: QueryDataProps) => void = handleQuery,
  ) => {
    const { getByText } = render(
      <SearchResultCard result={items} onSearchQuery={onSearchQuery} />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <MemoryRouter>
                <CustomThemeProvider>{children}</CustomThemeProvider>
              </MemoryRouter>
            </RecoilRoot>
          </QueryClientProvider>
        ),
      },
    );

    return getByText;
  };

  it('Renders SearchResultCard with expected data', () => {
    const getByText = renderer(expectedData);

    expect(getByText('task11')).not.toBeNull();
  });

  it('Calls onSearchQuery function', () => {
    const getByText = renderer(expectedData);

    fireEvent.click(getByText('task11'));

    expect(handleQuery).toBeCalledWith({
      id: expectedData.id,
      avatarUrl: expectedData.avatar_url,
      username: expectedData.login,
    });
  });
});
