import { useMemo } from 'react';
import { useTheme } from '../../utils/hooks';
import { useToggleModal } from '../../utils/hooks/useToggleModal';

import { THEME_MODE } from '../../utils/common';

import Icons from '../Icons';
import Logo from '../Logo/Logo';
import ReactPortal from '../Modal/ReactPortal';
import NavMenu from './NavMenu/NavMenu';

import {
  StyledLogoButton,
  StyledModeButton,
  StyledNavButton,
  StyledNavigation,
  StyledNavItem,
} from './Navigation.style';

export default function Navigation() {
  const { theme, onChangeTheme } = useTheme();
  const { modalState, toggleModal } = useToggleModal();

  const isDark = useMemo(() => theme === THEME_MODE.dark, [theme]);

  return (
    <StyledNavigation>
      <StyledNavItem>
        <StyledNavButton
          type="button"
          onClick={toggleModal}
          aria-label="toggle modal"
        >
          <Icons.Github />
          <Icons.ArrowDown />
        </StyledNavButton>
      </StyledNavItem>
      <StyledLogoButton to="/">
        <Logo size="md" mode={THEME_MODE.dark} />
      </StyledLogoButton>
      <StyledNavItem>
        <StyledModeButton
          type="button"
          onClick={onChangeTheme}
          aria-label="change theme mode"
        >
          {isDark ? <Icons.LightMode /> : <Icons.DarkMode />}
        </StyledModeButton>
      </StyledNavItem>
      {modalState && (
        <ReactPortal>
          <NavMenu toggleModal={toggleModal} />
        </ReactPortal>
      )}
    </StyledNavigation>
  );
}
