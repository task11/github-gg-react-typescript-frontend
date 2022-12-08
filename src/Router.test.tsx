import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import HomePage from './pages/HomePage/HomePage';
import NotFountPage from './pages/NotFoundPage/NotFoundPage';
import { CustomThemeProvider } from './styles';

afterEach(cleanup);

const queryClient = new QueryClient();

describe('<Router />', () => {
  it('Landing on a not found page', () => {
    const badRoute = '/bad';

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <CustomThemeProvider>
            <MemoryRouter initialEntries={[badRoute]}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFountPage />} />
              </Routes>
            </MemoryRouter>
          </CustomThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>,
    );

    expect(getByText(/404/)).not.toBeNull();
  });
});
