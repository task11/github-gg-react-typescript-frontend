import { useCallback, useLayoutEffect } from 'react';

import { useAtom } from 'jotai';

import { modeAtom } from '../../../atoms/mode';
import { THEME_MODE } from '../../common';

import LocalService from '../../services/Local.service';

export default function useTheme() {
  const [theme, setTheme] = useAtom(modeAtom);

  const onChangeTheme = useCallback(() => {
    const newTheme =
      theme === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;
    setTheme(newTheme);

    LocalService.set('theme', newTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const storedTheme = LocalService.get('theme');
    if (!storedTheme) {
      LocalService.set('theme', theme);
    }
  }, []);

  return { theme, onChangeTheme };
}
