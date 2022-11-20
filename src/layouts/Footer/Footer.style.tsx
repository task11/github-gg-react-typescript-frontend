import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 24px;
  padding: 24px 0px;
  background-color: ${(props) => props.theme.bgColor.background};
  color: ${(props) => props.theme.fontColor.default};
  transition: background 0.3s ease-in, color 0.2s ease-in;
`;

export const StyledFooterWrapper = styled.div`
  width: 100%;
`;

export const StyledFooterSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledLogoWrapper = styled.strong`
  margin-right: 32px;
`;

export const StyledFooterItem = styled.div`
  flex-basis: 100px;

  strong {
    font-weight: 500;
  }
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

export const StyledFooterLink = styled.a`
  display: inline-block;
  font-size: 14px;

  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.fontColor.hover};
  }
`;
