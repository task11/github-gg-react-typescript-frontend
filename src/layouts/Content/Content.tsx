import { StyledContent } from './Content.style';

interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <StyledContent>{children}</StyledContent>;
}
