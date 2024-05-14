import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CustomThemeProvider } from './styles';

import App from './App';

const queryClient = new QueryClient();

describe('App', () => {
  it('Shows App component', () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </QueryClientProvider>,
    );

    expect(queryByText(/Search for GitHub users/)).not.toBeNull();
  });
});
