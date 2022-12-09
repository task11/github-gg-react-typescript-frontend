import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from '../../../../styles';

import { RepositoryProps } from '../../../../types';

import UserRepository from '../UserRepository/UserRepository';

const queryClient = new QueryClient();

const expectedData = {
  id: 565512216,
  node_id: 'R_kgDOIbUIGA',
  name: 'github-gg-react-typescript-frontend',
  full_name: 'task11/github-gg-react-typescript-frontend',
  private: false,
  owner: {
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
  },
  html_url: 'https://github.com/task11/github-gg-react-typescript-frontend',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/task11/github-gg-react-typescript-frontend',
  forks_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/forks',
  keys_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/collaborators{/collaborator}',
  teams_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/teams',
  hooks_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/hooks',
  issue_events_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues/events{/number}',
  events_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/events',
  assignees_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/branches{/branch}',
  tags_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/tags',
  blobs_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/statuses/{sha}',
  languages_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/languages',
  stargazers_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/stargazers',
  contributors_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/contributors',
  subscribers_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/subscribers',
  subscription_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/subscription',
  commits_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/compare/{base}...{head}',
  merges_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/merges',
  archive_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/{archive_format}{/ref}',
  downloads_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/downloads',
  issues_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/labels{/name}',
  releases_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/deployments',
  created_at: '2022-11-13T16:36:56Z',
  updated_at: '2022-12-08T02:56:24Z',
  pushed_at: '2022-12-09T02:13:48Z',
  git_url: 'git://github.com/task11/github-gg-react-typescript-frontend.git',
  ssh_url: 'git@github.com:task11/github-gg-react-typescript-frontend.git',
  clone_url:
    'https://github.com/task11/github-gg-react-typescript-frontend.git',
  svn_url: 'https://github.com/task11/github-gg-react-typescript-frontend',
  homepage: '',
  size: 780,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'TypeScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 2,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: ['react', 'typescript'],
  visibility: 'public',
  forks: 0,
  open_issues: 2,
  watchers: 0,
  default_branch: 'main',
  permissions: {
    admin: true,
    maintain: true,
    push: true,
    triage: true,
    pull: true,
  },
};

describe('UserRepository', () => {
  const renderer = (repository: RepositoryProps) => {
    const { getByText } = render(<UserRepository repository={repository} />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <MemoryRouter>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </MemoryRouter>
          </RecoilRoot>
        </QueryClientProvider>
      ),
    });

    return getByText;
  };

  it('Renders UserRepository name with expected data', () => {
    const getByText = renderer(expectedData);

    expect(getByText('github-gg-react-typescript-frontend')).not.toBeNull();
  });

  it('Renders UserRepository topic with expected data', () => {
    const getByText = renderer(expectedData);

    expect(getByText('typescript')).not.toBeNull();
  });
});
