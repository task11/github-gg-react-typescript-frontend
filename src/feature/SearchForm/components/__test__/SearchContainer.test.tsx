import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CustomThemeProvider } from '../../../../styles';

import SearchContainer from '../SearchFormContainer';

const queryClient = new QueryClient();

describe('SearchContainer', () => {
  const renderer = () => {
    const { getByText } = render(<SearchContainer />, {
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

  it('Renders SearchForm', () => {
    const getByText = renderer();

    expect(getByText(/Search for/)).not.toBeNull();
  });

  it('Renders SearchInput', () => {
    const getByText = renderer();

    expect(getByText(/Enter github/)).not.toBeNull();
  });
});
