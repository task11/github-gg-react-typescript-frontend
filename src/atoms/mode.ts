import { atom } from 'jotai';

import { THEME_MODE } from '../utils/common';

export const modeAtom = atom(THEME_MODE.light);
