import { StyledImg } from './Avatar.style';

import { SIZES } from './Avatar.variant';

interface Props {
  src: string;
  size: 'sm' | 'md';
}

export default function Avatar({ src, size }: Props) {
  const sizeStyle = SIZES[size];

  return (
    <StyledImg
      src={src}
      sizeStyle={sizeStyle}
      alt={`avatar of the ${size} image`}
    />
  );
}
