import styled from 'styled-components';

export const StyledUserInfoSkeleton = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor.card};
  isolation: isolate;

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

export const StyledUserAvatarWrapper = styled.div`
  flex: 1;
`;

export const StyledUserAvatarSkeleton = styled(StyledSkeleton)`
  width: 120px;
  height: 120px;
  border-radius: 99%;
`;

export const StyledUserTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledUserTextSkeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 26px;
`;
