import { useParams } from 'react-router-dom';

import UserInfo from './UserInfo/UserInfo';
import UserContents from './UserContents/UserContents';
import UserRepositories from './UserRepositories/UserRepositories';

import { StyledUserContainer } from './UserContainer.style';

const userInfo = {
  avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
  login: 'task11',
  name: 'Jeong-hyeon Kim',
  bio: 'FE Developer',
};

const userContents = {
  blog: 'velog/@task11',
  email: '6539305@gmail.com',
  company: 'kakao',
};

// const repositories = [
//   {
//     id: 565512216,
//     node_id: 'R_kgDOIbUIGA',
//     name: 'github-gg-react-typescript-frontend',
//     full_name: 'task11/github-gg-react-typescript-frontend',
//     private: false,
//     owner: {
//       login: 'task11',
//       id: 89209626,
//       node_id: 'MDQ6VXNlcjg5MjA5NjI2',
//       avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/task11',
//       html_url: 'https://github.com/task11',
//       followers_url: 'https://api.github.com/users/task11/followers',
//       following_url:
//         'https://api.github.com/users/task11/following{/other_user}',
//       gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
//       organizations_url: 'https://api.github.com/users/task11/orgs',
//       repos_url: 'https://api.github.com/users/task11/repos',
//       events_url: 'https://api.github.com/users/task11/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/task11/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/task11/github-gg-react-typescript-frontend',
//     description: null,
//     fork: false,
//     url: 'https://api.github.com/repos/task11/github-gg-react-typescript-frontend',
//     forks_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/forks',
//     keys_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/collaborators{/collaborator}',
//     teams_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/teams',
//     hooks_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues/events{/number}',
//     events_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/events',
//     assignees_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/branches{/branch}',
//     tags_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/tags',
//     blobs_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/languages',
//     stargazers_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/subscription',
//     commits_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/compare/{base}...{head}',
//     merges_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/merges',
//     archive_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/downloads',
//     issues_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/task11/github-gg-react-typescript-frontend/deployments',
//     created_at: '2022-11-13T16:36:56Z',
//     updated_at: '2022-11-22T16:18:14Z',
//     pushed_at: '2022-11-26T13:19:40Z',
//     git_url: 'git://github.com/task11/github-gg-react-typescript-frontend.git',
//     ssh_url: 'git@github.com:task11/github-gg-react-typescript-frontend.git',
//     clone_url:
//       'https://github.com/task11/github-gg-react-typescript-frontend.git',
//     svn_url: 'https://github.com/task11/github-gg-react-typescript-frontend',
//     homepage: '',
//     size: 2323,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'TypeScript',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 2,
//     license: null,
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 0,
//     open_issues: 2,
//     watchers: 0,
//     default_branch: 'main',
//   },
//   {
//     id: 565053196,
//     node_id: 'R_kgDOIa4HDA',
//     name: 'pre-onboarding-3-2',
//     full_name: 'task11/pre-onboarding-3-2',
//     private: false,
//     owner: {
//       login: 'task11',
//       id: 89209626,
//       node_id: 'MDQ6VXNlcjg5MjA5NjI2',
//       avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/task11',
//       html_url: 'https://github.com/task11',
//       followers_url: 'https://api.github.com/users/task11/followers',
//       following_url:
//         'https://api.github.com/users/task11/following{/other_user}',
//       gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
//       organizations_url: 'https://api.github.com/users/task11/orgs',
//       repos_url: 'https://api.github.com/users/task11/repos',
//       events_url: 'https://api.github.com/users/task11/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/task11/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/task11/pre-onboarding-3-2',
//     description: 'DNC X Wanted preface',
//     fork: false,
//     url: 'https://api.github.com/repos/task11/pre-onboarding-3-2',
//     forks_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/forks',
//     keys_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/teams',
//     hooks_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/events',
//     assignees_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/tags',
//     blobs_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/languages',
//     stargazers_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/subscription',
//     commits_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/task11/pre-onboarding-3-2/merges',
//     archive_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/downloads',
//     issues_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/task11/pre-onboarding-3-2/deployments',
//     created_at: '2022-11-12T07:24:53Z',
//     updated_at: '2022-11-12T07:44:51Z',
//     pushed_at: '2022-11-17T07:48:02Z',
//     git_url: 'git://github.com/task11/pre-onboarding-3-2.git',
//     ssh_url: 'git@github.com:task11/pre-onboarding-3-2.git',
//     clone_url: 'https://github.com/task11/pre-onboarding-3-2.git',
//     svn_url: 'https://github.com/task11/pre-onboarding-3-2',
//     homepage: null,
//     size: 217,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'TypeScript',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'main',
//   },
//   {
//     id: 563596013,
//     node_id: 'R_kgDOIZfK7Q',
//     name: 'pre-onboarding-7th-3-1-',
//     full_name: 'task11/pre-onboarding-7th-3-1-',
//     private: false,
//     owner: {
//       login: 'task11',
//       id: 89209626,
//       node_id: 'MDQ6VXNlcjg5MjA5NjI2',
//       avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/task11',
//       html_url: 'https://github.com/task11',
//       followers_url: 'https://api.github.com/users/task11/followers',
//       following_url:
//         'https://api.github.com/users/task11/following{/other_user}',
//       gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
//       organizations_url: 'https://api.github.com/users/task11/orgs',
//       repos_url: 'https://api.github.com/users/task11/repos',
//       events_url: 'https://api.github.com/users/task11/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/task11/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/task11/pre-onboarding-7th-3-1-',
//     description: null,
//     fork: false,
//     url: 'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-',
//     forks_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/forks',
//     keys_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/collaborators{/collaborator}',
//     teams_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/teams',
//     hooks_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/issues/events{/number}',
//     events_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/events',
//     assignees_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/branches{/branch}',
//     tags_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/tags',
//     blobs_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/languages',
//     stargazers_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/subscription',
//     commits_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/compare/{base}...{head}',
//     merges_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/merges',
//     archive_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/downloads',
//     issues_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/task11/pre-onboarding-7th-3-1-/deployments',
//     created_at: '2022-11-08T23:56:28Z',
//     updated_at: '2022-11-09T08:43:32Z',
//     pushed_at: '2022-11-10T07:46:35Z',
//     git_url: 'git://github.com/task11/pre-onboarding-7th-3-1-.git',
//     ssh_url: 'git@github.com:task11/pre-onboarding-7th-3-1-.git',
//     clone_url: 'https://github.com/task11/pre-onboarding-7th-3-1-.git',
//     svn_url: 'https://github.com/task11/pre-onboarding-7th-3-1-',
//     homepage: null,
//     size: 712,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'TypeScript',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'main',
//   },
//   {
//     id: 563629722,
//     node_id: 'R_kgDOIZhOmg',
//     name: 'boilerplate-react-typescript',
//     full_name: 'task11/boilerplate-react-typescript',
//     private: false,
//     owner: {
//       login: 'task11',
//       id: 89209626,
//       node_id: 'MDQ6VXNlcjg5MjA5NjI2',
//       avatar_url: 'https://avatars.githubusercontent.com/u/89209626?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/task11',
//       html_url: 'https://github.com/task11',
//       followers_url: 'https://api.github.com/users/task11/followers',
//       following_url:
//         'https://api.github.com/users/task11/following{/other_user}',
//       gists_url: 'https://api.github.com/users/task11/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/task11/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/task11/subscriptions',
//       organizations_url: 'https://api.github.com/users/task11/orgs',
//       repos_url: 'https://api.github.com/users/task11/repos',
//       events_url: 'https://api.github.com/users/task11/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/task11/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/task11/boilerplate-react-typescript',
//     description:
//       'Boilerplate CRA - Typescript - Eslint - Prettier - Commitlint - Husky',
//     fork: false,
//     url: 'https://api.github.com/repos/task11/boilerplate-react-typescript',
//     forks_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/forks',
//     keys_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/collaborators{/collaborator}',
//     teams_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/teams',
//     hooks_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/issues/events{/number}',
//     events_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/events',
//     assignees_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/branches{/branch}',
//     tags_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/tags',
//     blobs_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/languages',
//     stargazers_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/subscription',
//     commits_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/compare/{base}...{head}',
//     merges_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/merges',
//     archive_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/downloads',
//     issues_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/task11/boilerplate-react-typescript/deployments',
//     created_at: '2022-11-09T01:58:48Z',
//     updated_at: '2022-11-09T02:00:01Z',
//     pushed_at: '2022-11-09T02:10:18Z',
//     git_url: 'git://github.com/task11/boilerplate-react-typescript.git',
//     ssh_url: 'git@github.com:task11/boilerplate-react-typescript.git',
//     clone_url: 'https://github.com/task11/boilerplate-react-typescript.git',
//     svn_url: 'https://github.com/task11/boilerplate-react-typescript',
//     homepage: null,
//     size: 337,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'JavaScript',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'main',
//   },
// ];

export default function UserContainer() {
  const { username } = useParams();

  console.log(username);

  return (
    <StyledUserContainer>
      <UserInfo userInfo={userInfo} />
      <UserContents userContents={userContents} />
      <UserRepositories />
    </StyledUserContainer>
  );
}
