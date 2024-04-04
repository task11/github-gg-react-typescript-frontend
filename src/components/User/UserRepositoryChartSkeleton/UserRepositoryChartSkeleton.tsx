import {
  StyledChartSkeleton,
  StyledChartWrapper,
  StyledRepositoryInfoSkeleton,
  StyledUserRepositoryChartWrapper,
  StyledUserRepositoryInfoWrapper,
} from './styles';

export default function UserRepositoryChartSkeleton() {
  return (
    <StyledUserRepositoryChartWrapper>
      <StyledUserRepositoryInfoWrapper>
        <StyledRepositoryInfoSkeleton />
        <StyledRepositoryInfoSkeleton />
      </StyledUserRepositoryInfoWrapper>
      <StyledChartWrapper>
        <StyledChartSkeleton />
      </StyledChartWrapper>
      <StyledRepositoryInfoSkeleton />
    </StyledUserRepositoryChartWrapper>
  );
}
