import LogoImgDark from '../../assets/images/githubggLogo.png';
import LogoImgLight from '../../assets/images/githubggLogoLight.png';
import { Mode } from '../../types';
import { THEME_MODE } from '../../utils/common';

import { StyledLogo } from './Logo.style';

import { SIZES } from './Logo.variant';

type Props = {
  size: 'sm' | 'md' | 'lg';
  mode: Mode;
};

export default function Logo({ size, mode }: Props) {
  const sizeStyle = SIZES[size];

  if (mode === THEME_MODE.light) {
    return <StyledLogo src={LogoImgDark} sizeStyle={sizeStyle} />;
  }

  return <StyledLogo src={LogoImgLight} sizeStyle={sizeStyle} />;
}
