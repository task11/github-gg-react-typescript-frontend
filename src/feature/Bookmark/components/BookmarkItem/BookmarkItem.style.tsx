import styled from 'styled-components';

export const StyledBookmarkCard = styled.div`
  position: relative;
  width: 140px;
  height: 56px;
  background-color: ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  padding: 0 12px;

  span {
    font-size: 16px;
    font-weight: 500;
    word-break: break-all;
  }

  &:hover {
    background-color: ${(props) => props.theme.bgColor.cardHover};
  }
`;

export const StyledBookmarkCancel = styled.div`
  position: absolute;
  z-index: 2;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
`;

export const StyledBookmarkInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
