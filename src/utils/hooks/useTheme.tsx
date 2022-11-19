import { useCallback, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';

import { themeAtom } from '../../store';

import { Mode } from '../../types';
import { THEME_MODE } from '../common';

export function useTheme() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const onChangeTheme = useCallback(() => {
    const newTheme =
      theme === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem('theme') as Mode;

    if (
      currentTheme &&
      [THEME_MODE.dark, THEME_MODE.light].includes(currentTheme)
    ) {
      setTheme(currentTheme);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme(THEME_MODE.dark);
    }
  }, []);

  return { theme, onChangeTheme };
}
