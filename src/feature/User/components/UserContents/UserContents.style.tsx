import styled from 'styled-components';

export const StyledUserContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledUserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;

  svg path {
    fill: ${(props) => props.theme.fontColor.default};
  }

  a {
    color: ${(props) => props.theme.fontColor.default};
    &:visited {
      color: ${(props) => props.theme.fontColor.default};
    }
  }
`;
