import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { useToggle } from '../useToggle';

describe('useToggle', () => {
  const renderer = () => {
    const { result } = renderHook(() => useToggle(), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });
    return result;
  };

  it('Initial toggle state is False', () => {
    const result = renderer();

    expect(result.current.toggleState).toBe(false);
  });

  it('Calls handleToggle', () => {
    const result = renderer();

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.toggleState).toBe(true);
  });
});
