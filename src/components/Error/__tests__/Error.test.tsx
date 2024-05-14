import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Error from '../Error';

import { CustomThemeProvider } from '../../../styles';

const queryClient = new QueryClient();

describe('Error', () => {
  it('Render component', () => {
    const { getByText } = render(<Error />, {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </MemoryRouter>
        </QueryClientProvider>
      ),
    });

    expect(getByText(/에러가 발생하였습니다./)).not.toBeNull();
  });
});
