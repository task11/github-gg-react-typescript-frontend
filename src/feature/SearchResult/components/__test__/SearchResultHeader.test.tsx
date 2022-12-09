import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from '../../../../styles';

import SearchResultHeader from '../SearchResultHeader/SearchResultHeader';

const queryClient = new QueryClient();

describe('SearchResultHeader', () => {
  const renderer = (totalCount: number) => {
    const { getByText } = render(
      <SearchResultHeader totalCount={totalCount} />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <MemoryRouter>
                <CustomThemeProvider>{children}</CustomThemeProvider>
              </MemoryRouter>
            </RecoilRoot>
          </QueryClientProvider>
        ),
      },
    );

    return getByText;
  };

  it('Renders SearchResultHeader with text', () => {
    const expectedTotalCount = 100;
    const getByText = renderer(expectedTotalCount);

    expect(getByText(`총 ${expectedTotalCount}건의 검색 결과`)).not.toBeNull();
  });
});
