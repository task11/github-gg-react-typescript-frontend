import styled from 'styled-components';

export const StyledSearchResultWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const StyledSearchResultHeaderSekeleton = styled(StyledSkeleton)`
  width: 200px;
  height: 34px;
`;

export const StyledSearchCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const StyledSearchCardSekeleton = styled(StyledSkeleton)`
  width: 100%;
  height: 56px;
  border-radius: 8px;
`;
