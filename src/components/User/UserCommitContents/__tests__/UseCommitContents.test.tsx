import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

import { CommitProps } from '../../../../types';
import { CustomThemeProvider } from '../../../../styles';

import UserCommitContents from '../UserCommitContents';

const queryClient = new QueryClient();

describe('UserCommitContents Component', () => {
  it('should render commit details correctly', () => {
    const mockCommitContent = {
      html_url: 'https://github.com/test/repo/commit/testcommit',
      commit: {
        url: 'https://api.github.com/repos/test/repo/commits/testcommit',
        author: {
          date: '2024-04-30T12:34:56Z',
        },
        message: 'Test commit message',
        comment_count: 2,
      },
    } as CommitProps;

    const { getByText } = render(
      <UserCommitContents commitContent={mockCommitContent} />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <MemoryRouter>
                <CustomThemeProvider>{children}</CustomThemeProvider>
              </MemoryRouter>
            </RecoilRoot>
          </QueryClientProvider>
        ),
      },
    );

    expect(getByText('repo')).not.toBeNull();

    expect(getByText('Test commit message')).not.toBeNull();

    expect(getByText('2024-04-30')).not.toBeNull();

    expect(getByText('2')).not.toBeNull();
  });
});
