import styled from 'styled-components';

export const StyledRecentSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;

  .recent-title {
    font-size: 14px;
    color: rgb(106, 115, 123);
    padding-top: 12px;
    border-top: 1px solid rgba(187, 187, 187, 0.69);
  }
`;

export const StyledRecentSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledRecentItem = styled.button`
  border: none;
  border-radius: 30px;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.fontColor.header};
  padding: 6px 12px;
  font-size: 14px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  cursor: pointer;
`;
