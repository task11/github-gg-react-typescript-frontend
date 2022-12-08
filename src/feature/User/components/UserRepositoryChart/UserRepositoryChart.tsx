import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import Chart from 'react-apexcharts';

import useUserRepository from '../../api/useUserRepository';

import { RepositoryProps } from '../../../../types';

import { themeAtom } from '../../../../store';

import UserRepositoryChartSkeleton from '../UserSkeleton/UserRepositoryChartSkeleton';

import {
  StyledRepositoryContent,
  StyledUserRepositoryChart,
  StyledUserRepositoryInfo,
  StyledChartWrapper,
} from './UserRepositoryChart.style';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepositoryChart({ repository }: Props) {
  const mode = useRecoilValue(themeAtom);
  const { data, isLoading } = useUserRepository(
    repository.owner.login,
    repository.name,
  );

  const dataIsEmpty = useMemo(
    () => data && Object.keys(data).length === 0 && data.constructor === Object,
    [data],
  );

  if (isLoading) return <UserRepositoryChartSkeleton />;

  return (
    <StyledUserRepositoryChart>
      <StyledUserRepositoryInfo>
        {repository.fork && (
          <span className="repository-type">forked repository</span>
        )}
        {repository.description && (
          <StyledRepositoryContent>
            <span className="label">Description</span>
            <strong className="description">{repository.description}</strong>
          </StyledRepositoryContent>
        )}
        {repository.language && (
          <StyledRepositoryContent>
            <span className="label">Most used language</span>
            <span>{repository.language}</span>
          </StyledRepositoryContent>
        )}
      </StyledUserRepositoryInfo>
      {!dataIsEmpty && (
        <StyledChartWrapper>
          <div className="label">Language chart</div>
          <Chart
            options={{
              theme: {
                mode,
              },
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: Object.keys(data),
            }}
            series={Object.values(data) as number[]}
            type="pie"
            height="280px"
          />
        </StyledChartWrapper>
      )}
    </StyledUserRepositoryChart>
  );
}
