import styled from 'styled-components';

export const StyledRecentSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 12px 12px 12px;
  gap: 8px;

  .recent-title {
    font-size: 14px;
    color: rgb(106, 115, 123);
    padding-top: 12px;
    border-top: 1px solid ${(props) => props.theme.borderColor.top};
  }
`;

export const StyledRecentSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
