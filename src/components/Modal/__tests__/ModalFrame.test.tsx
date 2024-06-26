import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ModalFrame from '../ModalFrame';

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
            <MemoryRouter>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </MemoryRouter>
          </QueryClientProvider>
        ),
      },
    );

    expect(getByText(/modal test/)).not.toBeNull();
  });
});
