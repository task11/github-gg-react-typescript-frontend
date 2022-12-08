import styled from 'styled-components';

export const StyledUserRepositoryChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-height: 500px;
  background-color: ${(props) => props.theme.bgColor.card};
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
`;

export const StyledUserRepositoryInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.skeletonColor.background};

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

export const StyledRepositoryInfoSkeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 36px;
`;

export const StyledChartWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const StyledChartSkeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 100%;
`;
