import styled from 'styled-components';

export const StyledSkeletonWrapper = styled.div`
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

export const StyledCommitsWrapper = styled.div`
  width: 100%;
  height: 70px;

  @media screen and (min-width: 768px) {
    height: 150px;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
  }
`;

export const StyledCommitsSkeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 100%;
`;
