import Icons from '../../components/Icons';

import { IconWrapper, StyledLink, StyledNotFoundPage } from './styles';

export default function NotFoundPage() {
  return (
    <StyledNotFoundPage>
      <IconWrapper>
        <Icons.Github />
      </IconWrapper>
      <strong className="notfound-title">404</strong>
      <span className="notfound-content">Not Found</span>
      <StyledLink to="/">click to home</StyledLink>
    </StyledNotFoundPage>
  );
}
