import { render } from '@testing-library/react';

import ModalFrame from '../ModalFrame';

import { MemoryRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CustomThemeProvider } from '../../../styles';

const queryClient = new QueryClient();

describe('Error', () => {
  it('Render component', () => {
    const state = true;
    const handleModal = jest.fn();

    const { getByText } = render(
      <ModalFrame handleModal={handleModal} state={state}>
        <div>modal test</div>
      </ModalFrame>,
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

    expect(getByText(/modal test/)).not.toBeNull();
  });
});
