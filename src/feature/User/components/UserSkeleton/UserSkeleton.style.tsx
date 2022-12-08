import styled from 'styled-components';

export const StyledUserSkeleton = styled.section`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledUserInfoSkeleton = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor.card};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      90deg,
      ${(props) => props.theme.skeletonColor.default},
      ${(props) => props.theme.skeletonColor.start} 20%,
      ${(props) => props.theme.skeletonColor.end} 60%,
      ${(props) => props.theme.skeletonColor.default}
    );
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export const StyledUserAvatarSkeleton = styled(StyledSkeleton)`
  width: 120px;
  height: 120px;
  border-radius: 99%;
`;

export const StyledUserTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledUserTextSkeleton = styled(StyledSkeleton)`
  width: 140px;
  height: 26px;
`;

export const StyledUserContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const StyledUserContentSkeleton = styled(StyledSkeleton)`
  width: 160px;
  height: 18px;
`;

export const StyledUserRepositoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;

export const StyledUserRepositoriesSkeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 56px;
`;
