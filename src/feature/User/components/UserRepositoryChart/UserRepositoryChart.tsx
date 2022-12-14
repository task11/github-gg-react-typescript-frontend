import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import Chart from 'react-apexcharts';

import useUserRepository from '../../api/useUserRepository';

import { RepositoryProps } from '../../../../types';

import { themeAtom } from '../../../../store';

import UserRepositoryChartSkeleton from '../UserSkeleton/UserRepositoryChartSkeleton';
import Error from '../../../../components/Error/Error';

import {
  StyledRepositoryContent,
  StyledUserRepositoryChart,
  StyledUserRepositoryInfo,
  StyledChartWrapper,
  StyledRepositoryLink,
  StyledRepositoryLinkWrapper,
  StyledErrorWrapper,
} from './UserRepositoryChart.style';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepositoryChart({ repository }: Props) {
  const mode = useRecoilValue(themeAtom);
  const { data, isLoading, isError } = useUserRepository(
    repository.owner.login,
    repository.name,
  );

  const dataIsEmpty = useMemo(
    () => data && Object.keys(data).length === 0 && data.constructor === Object,
    [data],
  );

  if (isLoading) return <UserRepositoryChartSkeleton />;

  if (isError) {
    return (
      <StyledErrorWrapper>
        <Error />
      </StyledErrorWrapper>
    );
  }

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
      <StyledRepositoryLinkWrapper>
        <StyledRepositoryLink href={repository.html_url} target="blank">
          Go to repository
        </StyledRepositoryLink>
      </StyledRepositoryLinkWrapper>
    </StyledUserRepositoryChart>
  );
}
