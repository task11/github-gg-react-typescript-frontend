import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

import UserInfo from '../UserInfo';

import { CustomThemeProvider } from '../../../../styles';

import * as useUserModule from '../../../../utils/hooks/useUser';
import * as useToggleBookmarkModule from '../../../../utils/hooks/useToggleBookmark';

const queryClient = new QueryClient();

describe('UserInfo Component', () => {
  const mockUser = {
    login: 'testuser',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/testuser',
    html_url: 'https://github.com/testuser',
    followers_url: 'https://api.github.com/users/testuser/followers',
    following_url:
      'https://api.github.com/users/testuser/following{/other_user}',
    gists_url: 'https://api.github.com/users/testuser/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/testuser/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/testuser/subscriptions',
    organizations_url: 'https://api.github.com/users/testuser/orgs',
    repos_url: 'https://api.github.com/users/testuser/repos',
    events_url: 'https://api.github.com/users/testuser/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/testuser/received_events',
    type: 'User',
    site_admin: false,
    name: 'Test User',
    company: 'Test Company',
    blog: 'https://testuserblog.com',
    location: 'Test Location',
    email: 'testuser@example.com',
    hireable: null,
    bio: 'This is a test bio',
    twitter_username: null,
    public_repos: 10,
    public_gists: 2,
    followers: 100,
    following: 50,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-02T00:00:00Z',
  };

  beforeEach(() => {
    jest.spyOn(useUserModule, 'default').mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false,
    } as any);

    jest.spyOn(useToggleBookmarkModule, 'default').mockReturnValue({
      isBookmark: false,
      toggleBookmark: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render user information correctly', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <MemoryRouter initialEntries={['/user/testuser']}>
            <CustomThemeProvider>
              <UserInfo username="testuser" />
            </CustomThemeProvider>
          </MemoryRouter>
        </RecoilRoot>
      </QueryClientProvider>,
    );

    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByText('Test User')).toBeInTheDocument();
    expect(getByText('This is a test bio')).toBeInTheDocument();
    expect(getByText('testuser@example.com')).toBeInTheDocument();
    expect(getByText('Test Company')).toBeInTheDocument();
  });
});
