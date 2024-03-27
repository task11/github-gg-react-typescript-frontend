import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './layouts/Main/Main';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserPage from './pages/UserPage/UserPage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
