import useRecentCommits from '../../../utils/hooks/useRecentCommits';
import UserCommitContents from '../UserCommitContents';
import UserCommitsSkeleton from '../UserCommitsSkeleton';

import {
  StyledUserCommit,
  StyledUserCommitsHeader,
  StyledUserCommits,
} from './styles';

interface Props {
  username: string | undefined;
}

export default function UserCommits({ username }: Props) {
  const { commits, isLoading } = useRecentCommits(username || '');

  if (isLoading) return <UserCommitsSkeleton />;

  return (
    <StyledUserCommit>
      <StyledUserCommitsHeader>Last 3 Commits</StyledUserCommitsHeader>
      <StyledUserCommits>
        {commits.map((commitContent) => (
          <UserCommitContents
            key={commitContent.node_id}
            commitContent={commitContent}
          />
        ))}
      </StyledUserCommits>
    </StyledUserCommit>
  );
}
