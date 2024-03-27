import { render } from '@testing-library/react';

import Error from '../Error';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CustomThemeProvider } from '../../../styles';

const queryClient = new QueryClient();

describe('Avatar', () => {
  it('Shows region', () => {
    const { getByText } = render(<Error />, {
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

    expect(getByText(/에러가 발생하였습니다./)).not.toBeNull();
  });
});
