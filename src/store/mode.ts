import { atom } from 'recoil';

import { Mode } from '../types';
import { THEME_MODE } from '../utils/common';

export const themeAtom = atom<Mode>({
  key: 'Theme',
  default: THEME_MODE.light,
});
