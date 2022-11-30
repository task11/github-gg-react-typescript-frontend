import styled from 'styled-components';

export const StyledUserRepository = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 12px;
  gap: 12px;
  min-height: 56px;
  background-color: ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  transition: background 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.bgColor.cardHover};
  }

  strong {
    font-size: 16px;
    font-weight: 500;
    word-break: break-all;
  }
`;

export const StyledDropdown = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg path {
    fill: ${(props) => props.theme.fontColor.default};
  }
`;
