import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../../styles';

import UserCommits from '../UserCommits';
import useRecentCommits from '../../../../utils/hooks/useRecentCommits';
import UserCommitsSkeleton from '../../UserCommitsSkeleton';
import UserCommitContents from '../../UserCommitContents';

const queryClient = new QueryClient();

jest.mock('../../../../utils/hooks/useRecentCommits', () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock('../../UserCommitsSkeleton', () => () => (
  <div>UserCommitsSkeleton</div>
));
jest.mock('../../UserCommitContents', () => () => (
  <div>UserCommitContents</div>
));

describe('UserCommits 컴포넌트', () => {
  const renderer = (username: string) => {
    const { getByText, getAllByText } = render(
      <UserCommits username={username} />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </MemoryRouter>
          </QueryClientProvider>
        ),
      },
    );
    return { getByText, getAllByText };
  };

  it('로딩 중일 때 UserCommitsSkeleton을 보여준다', () => {
    (useRecentCommits as jest.Mock).mockReturnValue({
      isLoading: true,
      commits: [],
    });
    const { getByText } = renderer('testuser');

    expect(getByText('UserCommitsSkeleton')).not.toBeNull();
  });

  it('커밋이 없을 때 메시지를 보여준다', () => {
    (useRecentCommits as jest.Mock).mockReturnValue({
      isLoading: false,
      commits: [],
    });
    const { getByText } = renderer('testuser');

    expect(getByText('There are no commits to display.')).not.toBeNull();
  });

  it('커밋 데이터가 있을 때 UserCommitContents를 보여준다', () => {
    const mockCommits = [
      {
        node_id: '1',
        commit: {
          author: { name: 'John Doe', date: '2024-04-30' },
          message: 'First commit',
        },
      },
      {
        node_id: '2',
        commit: {
          author: { name: 'Jane Doe', date: '2024-05-01' },
          message: 'Second commit',
        },
      },
    ];
    (useRecentCommits as jest.Mock).mockReturnValue({
      isLoading: false,
      commits: mockCommits,
    });

    const { getAllByText } = renderer('testuser');

    expect(getAllByText('UserCommitContents').length).toBe(mockCommits.length);
  });
});
