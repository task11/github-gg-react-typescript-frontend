import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../../styles';

import UserRepositoryTopicList from '../UserRepositoryTopicList';

const queryClient = new QueryClient();

const expectedData = ['react', 'typescript'];

describe('UserRepositoryTopicList', () => {
  const renderer = () => {
    const { getByText } = render(
      <UserRepositoryTopicList topics={expectedData} />,
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

    return getByText;
  };

  it('Renders UserRepositoryTopicList topic with expected data', () => {
    const getByText = renderer();

    expect(getByText('typescript')).not.toBeNull();
  });
});
