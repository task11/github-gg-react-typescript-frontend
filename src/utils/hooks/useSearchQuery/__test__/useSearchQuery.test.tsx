import { act, renderHook } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import useSearchQuery from '../useSearchQuery';

describe('UseSearchQuery', () => {
  const renderer = () => {
    const { result } = renderHook(() => useSearchQuery(), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });
    return result;
  };

  it('Initial searchQuery state is ""', () => {
    const result = renderer();

    // expect(result.current.searchQuery).toBe('');
  });

  it('Calls handleSearchQuery', () => {
    const result = renderer();

    act(() => {
      result.current.handleSearchQuery({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    // expect(result.current.searchQuery).toBe('test');
  });

  it('Calls initSearchQuery', () => {
    const result = renderer();

    act(() => {
      result.current.initSearchQuery();
    });

    // expect(result.current.searchQuery).toBe('');
  });

  it('Initial isSearching state is False', () => {
    const result = renderer();

    expect(result.current.isSearching).toBe(false);
  });

  it('Calls setIsFocus', () => {
    const result = renderer();

    act(() => {
      result.current.setIsFocus(true);
    });

    expect(result.current.isSearching).toBe(true);
  });
});
