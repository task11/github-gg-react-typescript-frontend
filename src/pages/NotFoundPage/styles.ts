import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNotFoundPage = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor.background};
  color: ${(props) => props.theme.fontColor.default};
  gap: 20px;

  .notfound-title {
    font-size: 62px;
    font-weight: 600;
  }

  .notfound-content {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 72px;
    height: 72px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor.accent};

  &:visited {
    color: ${(props) => props.theme.fontColor.accent};
  }
`;
