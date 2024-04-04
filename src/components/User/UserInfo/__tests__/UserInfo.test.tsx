import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from '../../../../styles';

import { QueryDataProps, UserProps } from '../../../../types';

import UserInfo from '../UserInfo';

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
  name: 'Jeong-hyeon Kim',
  company: null,
  blog: '',
  location: 'Seoul',
  email: null,
  hireable: null,
  bio: 'FE Developer',
  twitter_username: null,
  public_repos: 39,
  public_gists: 0,
  followers: 15,
  following: 20,
  created_at: '2021-08-19T15:20:11Z',
  updated_at: '2022-11-13T16:30:08Z',
  private_gists: 0,
  total_private_repos: 4,
  owned_private_repos: 4,
  disk_usage: 151987,
  collaborators: 0,
  two_factor_authentication: false,
  plan: {
    name: 'free',
    space: 976562499,
    collaborators: 0,
    private_repos: 10000,
  },
};

describe('UserInfo', () => {
  const handleFunction = jest.fn();

  const renderer = (
    user: UserProps,
    handleBookmark: (data: QueryDataProps) => void = handleFunction,
  ) => {
    const { getByText, getByTestId } = render(
      <UserInfo user={user} handleBookmark={handleBookmark} />,
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

    return { getByText, getByTestId };
  };

  it('Renders UserInfo with expected data', () => {
    const { getByText } = renderer(expectedData);

    expect(getByText('task11')).not.toBeNull();
  });

  it('Calls handleBookmark function', () => {
    const { getByTestId } = renderer(expectedData);

    fireEvent.click(getByTestId('bookmarkButton'));

    expect(handleFunction).toBeCalled();
  });
});
