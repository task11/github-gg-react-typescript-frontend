import styled from 'styled-components';

export const StyledTarget = styled.div`
  height: 1px;
`;

export const StyledErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.bgColor.card};
  border: 1px solid ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
`;
