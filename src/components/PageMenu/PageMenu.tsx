import Icons from '../Icons';
import { StyledMenu, StyledMenuItem, StyledPageMenu } from './styles';

interface Props {
  toggleModal: () => void;
}

export default function PageMenu({ toggleModal }: Props) {
  return (
    <StyledMenu>
      <StyledPageMenu>
        <StyledMenuItem to="/" onClick={toggleModal}>
          <Icons.SearchColor />
          <span>Home</span>
        </StyledMenuItem>
        <StyledMenuItem to="/bookmark" onClick={toggleModal}>
          <Icons.Bookmark />
          <span>Bookmark</span>
        </StyledMenuItem>
      </StyledPageMenu>
    </StyledMenu>
  );
}
