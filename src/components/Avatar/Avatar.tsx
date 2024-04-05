import { StyledImg } from './styles';

import { SIZES } from './variants';

interface Props {
  src: string;
  size: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, size }: Props) {
  const sizeStyle = SIZES[size];

  return (
    <StyledImg
      src={src}
      sizeStyle={sizeStyle}
      alt={`avatar of the ${size} sizes image`}
    />
  );
}
