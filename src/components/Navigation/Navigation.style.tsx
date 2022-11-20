import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const StyledNavItem = styled.div`
  display: flex;
  flex-basis: 64px;
  justify-content: center;
  align-items: center;
`;

export const StyledLogoButton = styled(Link)`
  display: flex;
  flex-basis: 64px;
  justify-content: center;
  align-items: center;
`;

export const StyledNavButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.fontColor.header};
  cursor: pointer;
`;

export const StyledModeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  svg {
    circle {
      fill: ${(props) => props.theme.fontColor.header};
    }
    path {
      fill: ${(props) => props.theme.fontColor.header};
    }
  }

  cursor: pointer;
`;
