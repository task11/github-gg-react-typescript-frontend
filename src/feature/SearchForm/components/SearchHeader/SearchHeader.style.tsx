import styled from 'styled-components';

export const StyledSearchHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  svg {
    fill: ${(props) => props.theme.bgColor.logo};
  }
`;

export const StyledHeader = styled.p`
  position: relative;
  font-size: 22px;
  font-weight: 600;
  height: 22px;
  overflow: hidden;
  padding-right: 2px;

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 22px;
    height: 22px;
    top: 0;
    right: 0;
    border-right: 2px solid ${(props) => props.theme.fontColor.default};
    animation: cursor 1s step-end infinite;
  }

  @keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
