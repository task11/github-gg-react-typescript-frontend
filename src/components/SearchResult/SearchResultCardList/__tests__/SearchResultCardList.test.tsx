import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../../styles';

import SearchResultCardList from '../SearchResultCardList';

const queryClient = new QueryClient();

describe('SearchResultCardList', () => {
  const mockedNavigate = jest.fn();
  const mockedSetRecent = jest.fn();
  const mockedUseNavigate = jest.fn(() => mockedNavigate);

  const expectedData = [
    {
      login: 'task11',
      id: 89209626,
      node_id: 'MDQ6VXNlcjg5MjA5NjI2',
      avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/task11',
      html_url: 'https://github.com/task11',
      followers_url: 'https://api.github.com/users/task11/followers',
      following_url:
        'https://api.github.com/users/task11/following{/other_user}',
      gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
      organizations_url: 'https://api.github.com/users/task11/orgs',
      repos_url: 'https://api.github.com/users/task11/repos',
      events_url: 'https://api.github.com/users/task11/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/task11/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'Task110001',
      id: 93867297,
      node_id: 'U_kgDOBZhNIQ',
      avatar_url: 'https://avatars.githubusercontent.com/u/93867297?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Task110001',
      html_url: 'https://github.com/Task110001',
      followers_url: 'https://api.github.com/users/Task110001/followers',
      following_url:
        'https://api.github.com/users/Task110001/following{/other_user}',
      gists_url: 'https://api.github.com/users/Task110001/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Task110001/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Task110001/subscriptions',
      organizations_url: 'https://api.github.com/users/Task110001/orgs',
      repos_url: 'https://api.github.com/users/Task110001/repos',
      events_url: 'https://api.github.com/users/Task110001/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Task110001/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'task111',
      id: 17960705,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE3OTYwNzA1',
      avatar_url: 'https://avatars.githubusercontent.com/u/17960705?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/task111',
      html_url: 'https://github.com/task111',
      followers_url: 'https://api.github.com/users/task111/followers',
      following_url:
        'https://api.github.com/users/task111/following{/other_user}',
      gists_url: 'https://api.github.com/users/task111/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/task111/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/task111/subscriptions',
      organizations_url: 'https://api.github.com/users/task111/orgs',
      repos_url: 'https://api.github.com/users/task111/repos',
      events_url: 'https://api.github.com/users/task111/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/task111/received_events',
      type: 'Organization',
      site_admin: false,
      score: 1,
    },
    {
      login: 'task1111',
      id: 94418499,
      node_id: 'U_kgDOBaC2Qw',
      avatar_url: 'https://avatars.githubusercontent.com/u/94418499?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/task1111',
      html_url: 'https://github.com/task1111',
      followers_url: 'https://api.github.com/users/task1111/followers',
      following_url:
        'https://api.github.com/users/task1111/following{/other_user}',
      gists_url: 'https://api.github.com/users/task1111/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/task1111/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/task1111/subscriptions',
      organizations_url: 'https://api.github.com/users/task1111/orgs',
      repos_url: 'https://api.github.com/users/task1111/repos',
      events_url: 'https://api.github.com/users/task1111/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/task1111/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'Task1123',
      id: 59307027,
      node_id: 'MDQ6VXNlcjU5MzA3MDI3',
      avatar_url: 'https://avatars.githubusercontent.com/u/59307027?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Task1123',
      html_url: 'https://github.com/Task1123',
      followers_url: 'https://api.github.com/users/Task1123/followers',
      following_url:
        'https://api.github.com/users/Task1123/following{/other_user}',
      gists_url: 'https://api.github.com/users/Task1123/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Task1123/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Task1123/subscriptions',
      organizations_url: 'https://api.github.com/users/Task1123/orgs',
      repos_url: 'https://api.github.com/users/Task1123/repos',
      events_url: 'https://api.github.com/users/Task1123/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Task1123/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'task1195',
      id: 106018189,
      node_id: 'U_kgDOBlG1jQ',
      avatar_url: 'https://avatars.githubusercontent.com/u/106018189?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/task1195',
      html_url: 'https://github.com/task1195',
      followers_url: 'https://api.github.com/users/task1195/followers',
      following_url:
        'https://api.github.com/users/task1195/following{/other_user}',
      gists_url: 'https://api.github.com/users/task1195/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/task1195/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/task1195/subscriptions',
      organizations_url: 'https://api.github.com/users/task1195/orgs',
      repos_url: 'https://api.github.com/users/task1195/repos',
      events_url: 'https://api.github.com/users/task1195/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/task1195/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'task1122',
      id: 59351054,
      node_id: 'MDQ6VXNlcjU5MzUxMDU0',
      avatar_url: 'https://avatars.githubusercontent.com/u/59351054?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/task1122',
      html_url: 'https://github.com/task1122',
      followers_url: 'https://api.github.com/users/task1122/followers',
      following_url:
        'https://api.github.com/users/task1122/following{/other_user}',
      gists_url: 'https://api.github.com/users/task1122/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/task1122/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/task1122/subscriptions',
      organizations_url: 'https://api.github.com/users/task1122/orgs',
      repos_url: 'https://api.github.com/users/task1122/repos',
      events_url: 'https://api.github.com/users/task1122/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/task1122/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'Task1125',
      id: 85531098,
      node_id: 'MDQ6VXNlcjg1NTMxMDk4',
      avatar_url: 'https://avatars.githubusercontent.com/u/85531098?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Task1125',
      html_url: 'https://github.com/Task1125',
      followers_url: 'https://api.github.com/users/Task1125/followers',
      following_url:
        'https://api.github.com/users/Task1125/following{/other_user}',
      gists_url: 'https://api.github.com/users/Task1125/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Task1125/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Task1125/subscriptions',
      organizations_url: 'https://api.github.com/users/Task1125/orgs',
      repos_url: 'https://api.github.com/users/Task1125/repos',
      events_url: 'https://api.github.com/users/Task1125/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Task1125/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
  ];

  // beforeEach(() => {
  //   jest.clearAllMocks();
  //   jest
  //     .spyOn(require('react-router-dom'), 'useNavigate')
  //     .mockImplementation(mockedUseNavigate);
  //   jest
  //     .spyOn(require('../../utils/services/Recent.service'), 'set')
  //     .mockImplementation(mockedSetRecent);
  // });

  const renderer = () => {
    const { getByText } = render(<SearchResultCardList />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </MemoryRouter>
        </QueryClientProvider>
      ),
    });

    return getByText;
  };

  // it('should navigate to homepage if queryString is not provided', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/search']}>
  //       <SearchResultCardList />
  //     </MemoryRouter>,
  //   );

  //   expect(mockedNavigate).toHaveBeenCalledWith('/');
  // });

  it('should render SearchResultCard for each item in the search result', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/search?q=test']}>
          <CustomThemeProvider>
            <SearchResultCardList />
          </CustomThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getAllByText('test'));
    });
  });
});
