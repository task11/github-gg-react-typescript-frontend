import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { CustomThemeProvider } from '../../../../styles';

import SearchHeader from '../SearchHeader';

const queryClient = new QueryClient();

describe('SearchHeader', () => {
  const renderer = () => {
    const { getByText } = render(<SearchHeader />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <MemoryRouter>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </MemoryRouter>
          </RecoilRoot>
        </QueryClientProvider>
      ),
    });

    return getByText;
  };

  it('Renders search header', () => {
    const getByText = renderer();

    expect(getByText(/Search for GitHub users/)).not.toBeNull();
  });
});
