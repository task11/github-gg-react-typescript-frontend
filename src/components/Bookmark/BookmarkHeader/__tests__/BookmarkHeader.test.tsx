import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { CustomThemeProvider } from '../../../../styles';

import BookmarkHeader from '../BookmarkHeader';

const queryClient = new QueryClient();

describe('BookmarkHeader', () => {
  const totalCount = 8;

  const renderer = () => {
    const { getByText } = render(<BookmarkHeader totalCount={totalCount} />, {
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

  it('Renders BookmarkHeader total count', () => {
    const getByText = renderer();

    expect(getByText('8 개의 북마크')).not.toBeNull();
  });
});
