import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './layouts/Main/Main';

import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import NotFountPage from './pages/NotFoundPage/NotFountPage';
import UserPage from './pages/UserPage/UserPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user/:username" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}
