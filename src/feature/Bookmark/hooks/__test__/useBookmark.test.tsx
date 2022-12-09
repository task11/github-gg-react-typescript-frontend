import { renderHook } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import useBookmark from '../useBookmark';

describe('useBookmark', () => {
  const renderer = () => {
    const { result } = renderHook(() => useBookmark(), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });
    return result;
  };

  it('Initial bookmarks state', () => {
    const result = renderer();

    expect(result.current.bookmarks).toStrictEqual([]);
  });
});
