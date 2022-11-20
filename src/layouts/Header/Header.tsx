import { StyledHeader } from './Header.style';

type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}
