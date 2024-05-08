import {
  StyledUserAvatarSkeleton,
  StyledUserAvatarWrapper,
  StyledUserInfoSkeleton,
  StyledUserTextSkeleton,
  StyledUserTextWrapper,
} from './styles';

export default function UserInfoSkeleton() {
  return (
    <StyledUserInfoSkeleton data-testid="user-info-skeleton">
      <StyledUserAvatarWrapper>
        <StyledUserAvatarSkeleton />
      </StyledUserAvatarWrapper>
      <StyledUserTextWrapper>
        <StyledUserTextSkeleton />
        <StyledUserTextSkeleton />
        <StyledUserTextSkeleton />
      </StyledUserTextWrapper>
    </StyledUserInfoSkeleton>
  );
}
