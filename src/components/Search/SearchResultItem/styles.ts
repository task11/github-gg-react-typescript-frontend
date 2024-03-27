import styled from 'styled-components';

export const StyledResultColumn = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  padding: 12px 12px;
  word-break: break-all;
  gap: 6px;
  cursor: default;

  &:hover {
    background: rgb(248, 249, 250);
  }
`;

export const StyledIconWrapper = styled.div`
  width: 16px;
  height: 16px;

  svg {
    fill: #121212;
  }
`;

export const StyledMatchWord = styled.div`
  font-weight: 700;
`;
