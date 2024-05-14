import { useMemo } from 'react';

import { useAtomValue } from 'jotai';

import Chart from 'react-apexcharts';

import useUserRepository from '../../../utils/hooks/useUserRepository';

import { RepositoryProps } from '../../../types';

import { modeAtom } from '../../../atoms/mode';

import UserRepositoryChartSkeleton from '../UserRepositoryChartSkeleton';
import Error from '../../Error';

import {
  StyledRepositoryContent,
  StyledUserRepositoryChart,
  StyledUserRepositoryInfo,
  StyledChartWrapper,
  StyledRepositoryLink,
  StyledRepositoryLinkWrapper,
  StyledErrorWrapper,
} from './style';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepositoryChart({ repository }: Props) {
  const mode = useAtomValue(modeAtom);
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
