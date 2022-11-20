import Icons from '../../Icons';
import { StyledMenu, StyledMenuItem, StyledNavMenu } from './NavMenu.style';

export default function NavMenu() {
  return (
    <StyledMenu>
      <StyledNavMenu>
        <StyledMenuItem to="/rank">
          <Icons.Rank />
          <span>Rank</span>
        </StyledMenuItem>
        <StyledMenuItem to="/bookmark">
          <Icons.Bookmark />
          <span>Bookmark</span>
        </StyledMenuItem>
      </StyledNavMenu>
    </StyledMenu>
  );
}
