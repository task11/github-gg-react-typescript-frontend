import { useCallback, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';

import { themeAtom } from '../../../store';

import { Mode } from '../../../types';
import { THEME_MODE } from '../../common';
import LocalService from '../../services/Local.service';

export default function useTheme() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const onChangeTheme = useCallback(() => {
    const newTheme =
      theme === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;
    setTheme(newTheme);

    LocalService.set('theme', newTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const currentTheme = LocalService.get('theme') as Mode;

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
