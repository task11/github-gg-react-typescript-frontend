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

export const StyledWithoutResult = styled.section`
  width: 100%;
  padding: 16px 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const StyledResultWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
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
