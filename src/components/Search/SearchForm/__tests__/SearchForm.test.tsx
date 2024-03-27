import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { CustomThemeProvider } from '../../../../styles';

import SearchForm from '../SearchForm';

const queryClient = new QueryClient();

describe('SearchForm', () => {
  const renderer = () => {
    const { getByText } = render(<SearchForm />, {
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

  it('Renders search form', () => {
    const getByText = renderer();

    expect(getByText(/Enter github user./)).not.toBeNull();
  });
});
