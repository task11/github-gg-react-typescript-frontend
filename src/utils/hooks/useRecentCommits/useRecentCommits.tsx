import { useQueries, useQuery } from '@tanstack/react-query';

import { repositoryCache } from '../../models';

import RepositoryService from '../../services/Repository.service';

import { CommitProps } from '../../../types';

export default function useRecentCommits(username: string) {
  const fetchCommitsFromRepository = async (repositoryname: string) => {
    return (
      await RepositoryService.getUserRepositoryCommits(username, repositoryname)
    ).data;
  };

  const fetchUserRepositories = async () => {
    return (await RepositoryService.getUserRepositories(username)).data;
  };

  const reposQuery = useQuery(
    repositoryCache.getUserRepositories(username),
    fetchUserRepositories,
    {
      select: (data) => data.map((repo) => repo.name),
    },
  );

  const commitQueries = useQueries({
    queries: reposQuery.data
      ? reposQuery.data?.map((repoName) => ({
          queryKey: repositoryCache.getRepositoryCommits(username, repoName),
          queryFn: () => fetchCommitsFromRepository(repoName),
          enabled: !!reposQuery.data,
        }))
      : [],
  });

  const isLoading =
    reposQuery.isLoading || commitQueries.some((query) => query.isLoading);

  const commits: CommitProps[] = commitQueries
    .flatMap((query) => (query.data ? query.data : []))
    .sort(
      (a, b) =>
        new Date(b.commit.author.date).getTime() -
        new Date(a.commit.author.date).getTime(),
    )
    .slice(0, 3);

  return { commits, isLoading };
}
