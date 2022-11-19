import { act, renderHook } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import { THEME_MODE } from '../../common';

import { useTheme } from '../useTheme';

describe('UseTheme', () => {
  const renderer = () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });
    return result;
  };

  it('Initial theme state is light', () => {
    const result = renderer();

    expect(result.current.theme).toBe(THEME_MODE.light);
  });

  it('Calls onChangeTheme', () => {
    const result = renderer();

    act(() => {
      result.current.onChangeTheme();
    });

    expect(result.current.theme).toBe(THEME_MODE.dark);
  });
});
