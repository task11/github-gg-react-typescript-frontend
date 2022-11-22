import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import App from './App';

const queryClient = new QueryClient();

describe('App', () => {
  it('Shows App test', () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </QueryClientProvider>,
    );

    expect(queryByText(/Task/)).not.toBeNull();
  });
});
