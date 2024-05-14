import { renderHook } from '@testing-library/react';

import useBookmark from '../useBookmark';

describe('useBookmark', () => {
  const renderer = () => {
    const { result } = renderHook(() => useBookmark());
    return result;
  };

  it('Initial bookmarks state', () => {
    const result = renderer();

    expect(result.current.bookmarks).toStrictEqual([]);
  });
});
