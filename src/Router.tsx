import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './layouts/Main/Main';
import HomePage from './pages/HomePage/HomePage';
import NotFountPage from './pages/NotFoundPage/NotFountPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}
