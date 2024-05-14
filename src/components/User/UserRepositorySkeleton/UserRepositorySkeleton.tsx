import {
  StyledUserSkeleton,
  StyledUserRepositoryWrapper,
  StyledUserRepositoriesSkeleton,
} from './styles';

export default function UserRepositorySkeleton() {
  return (
    <StyledUserSkeleton>
      <StyledUserRepositoryWrapper>
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
      </StyledUserRepositoryWrapper>
    </StyledUserSkeleton>
  );
}
