import { useQuery } from '@tanstack/react-query';

import { repositoryCache } from '../../models';

import RepositoryService from '../../services/Repository.service';

export default function useUserRepository(
  username: string,
  repositoryname: string,
) {
  const getUsersByQuery = async () => {
    return (
      await RepositoryService.getUserRespositoryLanguage(
        username,
        repositoryname,
      )
    ).data;
  };
  return useQuery(
    repositoryCache.getRepositoryLanguage(username, repositoryname),
    getUsersByQuery,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
      enabled: !!username || !!repositoryname,
    },
  );
}
