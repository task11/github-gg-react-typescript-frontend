import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledMenu = styled.section`
  width: 220px;
  height: 140px;
  padding: 16px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.bgColor.modal};

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 220px;
  }

  @media screen and (min-width: 1024px) {
    width: 320px;
    height: 220px;
  }
`;

export const StyledPageMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
`;

export const StyledMenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  color: ${(props) => props.theme.fontColor.default};
  background-color: ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 500;
  }

  &:visited {
    color: ${(props) => props.theme.fontColor.default};
  }

  &:hover {
    color: ${(props) => props.theme.fontColor.hover};
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 120px;
    height: 120px;
  }
`;
