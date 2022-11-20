import { render, cleanup } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import NotFountPage from './pages/NotFoundPage/NotFountPage';

afterEach(cleanup);

describe('<App />', () => {
  it('Renders as / ', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFountPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText(/Home/i)).not.toBeNull();
  });

  it('Landing on a not found page', () => {
    const badRoute = '/bad';

    const { getByText } = render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFountPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText(/404/i)).not.toBeNull();
  });
});
