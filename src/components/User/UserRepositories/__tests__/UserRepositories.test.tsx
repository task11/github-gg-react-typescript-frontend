import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MemoryRouter } from 'react-router-dom';

import * as useUserHook from '../../../../utils/hooks/useUser';
import * as useUserRepositoriesHook from '../../../../utils/hooks/useUserRepositories';
import * as useIntersectionObserverHook from '../../../../utils/hooks/useIntersectionObserver';

import UserRepositories from '../UserRepositories';

import { CustomThemeProvider } from '../../../../styles';

jest.mock('../../../../utils/hooks/useUser');
jest.mock('../../../../utils/hooks/useUserRepositories');
jest.mock('../../../../utils/hooks/useIntersectionObserver');

const queryClient = new QueryClient();

describe('UserRepositories Component', () => {
  beforeEach(() => {
    (useIntersectionObserverHook.default as jest.Mock).mockImplementation(() =>
      jest.fn(),
    );
  });

  it('should display user repositories when data is successfully fetched', async () => {
    const mockRepositories = [
      {
        id: 1,
        node_id: 'MDEwOlJlcG9zaXRvcnkx',
        name: 'test-repo-1',
        full_name: 'testuser/test-repo-1',
        owner: {
          login: 'testuser',
        },
        private: false,
        html_url: 'https://github.com/testuser/test-repo-1',
        description: 'This is a test repository',
        fork: false,
        url: 'https://api.github.com/repos/testuser/test-repo-1',
        topics: ['test', 'test2'],
      },
    ];

    (useUserHook.default as jest.Mock).mockReturnValue({
      data: { public_repos: 2 },
      isLoading: false,
    });
    (useUserRepositoriesHook.default as jest.Mock).mockReturnValue({
      data: { pages: [{ data: mockRepositories }] },
      isLoading: false,
      hasNextPage: false,
      isFetching: false,
    });

    const { getByText, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/user/testuser']}>
          <CustomThemeProvider>
            <UserRepositories username="testuser" />
          </CustomThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('user-repositories')).toBeInTheDocument();
      expect(getByText(/Repositories/i)).toBeInTheDocument();
      expect(getByText('test-repo-1')).toBeInTheDocument();
    });
  });
});
