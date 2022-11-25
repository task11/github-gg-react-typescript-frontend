import Icons from '../../Icons';
import { StyledMenu, StyledMenuItem, StyledNavMenu } from './NavMenu.style';

interface Props {
  toggleModal: () => void;
}

export default function NavMenu({ toggleModal }: Props) {
  return (
    <StyledMenu>
      <StyledNavMenu>
        <StyledMenuItem to="/" onClick={toggleModal}>
          <Icons.SearchColor />
          <span>Home</span>
        </StyledMenuItem>
        <StyledMenuItem to="/bookmark" onClick={toggleModal}>
          <Icons.Bookmark />
          <span>Bookmark</span>
        </StyledMenuItem>
      </StyledNavMenu>
    </StyledMenu>
  );
}
