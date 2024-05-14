import { atom } from 'jotai';

import { THEME_MODE } from '../utils/common';
import { Mode } from '../types';

import LocalService from '../utils/services/Local.service';

const initialTheme: Mode = LocalService.get('theme') || THEME_MODE.light;

export const modeAtom = atom<Mode>(initialTheme);
