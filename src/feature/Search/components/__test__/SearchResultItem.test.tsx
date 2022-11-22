import { fireEvent, render } from '@testing-library/react';

import SearchResultItem from '../SearchResultList/SearchResultItem';

const result = {
  avatar_url: 'https://avatars.githubusercontent.com/u/57589937?v=4',
  events_url: 'https://api.github.com/users/cmg1411/events{/privacy}',
  followers_url: 'https://api.github.com/users/cmg1411/followers',
  following_url: 'https://api.github.com/users/cmg1411/following{/other_user}',
  gists_url: 'https://api.github.com/users/cmg1411/gists{/gist_id}',
  gravatar_id: '',
  html_url: 'https://github.com/cmg1411',
  id: 57589937,
  login: 'cmg1411',
  node_id: 'MDQ6VXNlcjU3NTg5OTM3',
  organizations_url: 'https://api.github.com/users/cmg1411/orgs',
  received_events_url: 'https://api.github.com/users/cmg1411/received_events',
  repos_url: 'https://api.github.com/users/cmg1411/repos',
  score: 1,
  site_admin: false,
  starred_url: 'https://api.github.com/users/cmg1411/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/cmg1411/subscriptions',
  type: 'User',
  url: 'https://api.github.com/users/cmg1411',
};

describe('SearchResultItem', () => {
  const onSearchQuery = jest.fn();

  const renderer = () => {
    const { getByText } = render(
      <SearchResultItem result={result} onSearchQuery={onSearchQuery} />,
    );

    return getByText;
  };
  it('Renders username', () => {
    const getByText = renderer();

    expect(getByText('cmg1411')).not.toBeNull();
  });

  it('Calls onSearchQuery', () => {
    const getByText = renderer();
    fireEvent.mouseDown(getByText('cmg1411'));

    expect(onSearchQuery).toBeCalledWith({
      id: 57589937,
      avatarUrl: 'https://avatars.githubusercontent.com/u/57589937?v=4',
      username: 'cmg1411',
    });
  });
});
