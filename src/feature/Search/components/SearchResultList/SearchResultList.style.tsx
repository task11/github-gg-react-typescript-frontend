import styled from 'styled-components';

export const StyledResultColumn = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  padding: 12px 12px;
  cursor: pointer;
  word-break: break-all;
  gap: 6px;

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

export const StyledWithoutResult = styled.section`
  width: 100%;
  padding-top: 12px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledResultWrapper = styled.section`
  display: flex;
  flex-direction: column;

  svg {
    width: 16px;
    height: 16px;
  }

  .recommend-title {
    font-size: 14px;
    color: rgb(106, 115, 123);
    padding-left: 12px;
    padding-right: 12px;
  }
`;
