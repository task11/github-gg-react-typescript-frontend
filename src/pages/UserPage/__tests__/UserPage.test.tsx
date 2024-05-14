import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import UserPage from '../UserPage';
import UserInfo from '../../../components/User/UserInfo';
import UserRepositories from '../../../components/User/UserRepositories';
import UserCommits from '../../../components/User/UserCommits';

import { CustomThemeProvider } from '../../../styles';

const queryClient = new QueryClient();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    username: 'testuser',
  }),
}));

jest.mock('../../../components/User/UserInfo');
jest.mock('../../../components/User/UserRepositories');
jest.mock('../../../components/User/UserCommits');

describe('UserPage Component', () => {
  beforeEach(() => {
    (UserInfo as jest.Mock).mockImplementation(({ username }) => (
      <div>UserInfo Component: {username}</div>
    ));
    (UserRepositories as jest.Mock).mockImplementation(({ username }) => (
      <div>UserRepositories Component: {username}</div>
    ));
    (UserCommits as jest.Mock).mockImplementation(({ username }) => (
      <div>UserCommits Component: {username}</div>
    ));
  });

  it('renders UserPage with username from URL parameters', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/user/testuser']}>
          <CustomThemeProvider>
            <UserPage />
          </CustomThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(getByText('UserInfo Component: testuser')).toBeInTheDocument();
    expect(
      getByText('UserRepositories Component: testuser'),
    ).toBeInTheDocument();
    expect(getByText('UserCommits Component: testuser')).toBeInTheDocument();
  });
});
