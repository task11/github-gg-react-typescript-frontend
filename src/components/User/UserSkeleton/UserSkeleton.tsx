import {
  StyledUserAvatarSkeleton,
  StyledUserInfoSkeleton,
  StyledUserTextSkeleton,
  StyledUserSkeleton,
  StyledUserTextWrapper,
  StyledUserContentWrapper,
  StyledUserContentSkeleton,
  StyledUserRepositoryWrapper,
  StyledUserRepositoriesSkeleton,
} from './styles';

export default function UserSkeleton() {
  return (
    <StyledUserSkeleton>
      <StyledUserInfoSkeleton>
        <StyledUserAvatarSkeleton />
        <StyledUserTextWrapper>
          <StyledUserTextSkeleton />
          <StyledUserTextSkeleton />
          <StyledUserTextSkeleton />
        </StyledUserTextWrapper>
      </StyledUserInfoSkeleton>
      <StyledUserContentWrapper>
        <StyledUserContentSkeleton />
        <StyledUserContentSkeleton />
        <StyledUserContentSkeleton />
      </StyledUserContentWrapper>
      <StyledUserRepositoryWrapper>
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
        <StyledUserRepositoriesSkeleton />
      </StyledUserRepositoryWrapper>
    </StyledUserSkeleton>
  );
}
