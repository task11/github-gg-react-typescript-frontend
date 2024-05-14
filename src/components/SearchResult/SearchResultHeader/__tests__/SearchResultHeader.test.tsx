import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../../styles';

import SearchResultHeader from '../SearchResultHeader';

const queryClient = new QueryClient();

describe('SearchResultHeader', () => {
  const renderer = () => {
    const { getByText } = render(<SearchResultHeader />, {
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

  it('Renders SearchResultHeader with text', () => {
    const getByText = renderer();

    expect(getByText(/총 0건의 검색 결과/)).not.toBeNull();
  });
});
