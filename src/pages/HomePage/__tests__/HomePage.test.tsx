import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../styles';

import HomePage from '../HomePage';

const queryClient = new QueryClient();

describe('HomePage', () => {
  const renderer = () => {
    const { getByText } = render(<HomePage />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </MemoryRouter>
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
