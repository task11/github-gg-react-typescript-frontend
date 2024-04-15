import {
  StyledCommitsSkeleton,
  StyledCommitsWrapper,
  StyledSkeletonWrapper,
} from './styles';

export default function UserCommitsSkeleton() {
  return (
    <StyledSkeletonWrapper>
      <StyledCommitsWrapper>
        <StyledCommitsSkeleton />
      </StyledCommitsWrapper>
      <StyledCommitsWrapper>
        <StyledCommitsSkeleton />
      </StyledCommitsWrapper>
      <StyledCommitsWrapper>
        <StyledCommitsSkeleton />
      </StyledCommitsWrapper>
    </StyledSkeletonWrapper>
  );
}
