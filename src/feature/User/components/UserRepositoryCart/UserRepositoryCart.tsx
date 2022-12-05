import useUserRepository from '../../api/useUserRepository';

import { RepositoryProps } from '../../../../types';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepositoryCart({ repository }: Props) {
  const { data, isLoading } = useUserRepository(
    repository.owner.login,
    repository.name,
  );

  if (isLoading) return <>loading..</>;

  console.log(data);

  return (
    <div>
      {repository.description && (
        <span>Description: {repository.description}</span>
      )}
      {repository.language && (
        <span>Most used language: {repository.language}</span>
      )}
      {repository.fork && <span>forked repository</span>}
    </div>
  );
}
