import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from './styles';

import App from './App';

const queryClient = new QueryClient();

describe('App', () => {
  it('Shows App component', () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>,
    );

    expect(queryByText(/Search for GitHub users/)).not.toBeNull();
  });
});
