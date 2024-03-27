import LogoImgDark from '../../assets/images/githubggLogo.png';
import LogoImgLight from '../../assets/images/githubggLogoLight.png';
import { Mode } from '../../types';
import { THEME_MODE } from '../../utils/common';

import { StyledLogo } from './styles';

import { SIZES } from './variants';

interface Props {
  size: 'sm' | 'md' | 'lg';
  mode: Mode;
}

export default function Logo({ size, mode }: Props) {
  const sizeStyle = SIZES[size];

  if (mode === THEME_MODE.light) {
    return (
      <StyledLogo
        src={LogoImgDark}
        sizeStyle={sizeStyle}
        alt={`${mode} mode ${size} sizes logo image`}
      />
    );
  }

  return (
    <StyledLogo
      src={LogoImgLight}
      sizeStyle={sizeStyle}
      alt={`${mode} mode ${size} sizes logo image`}
    />
  );
}
