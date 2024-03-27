import styled from 'styled-components';

export const StyledErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledError = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor.accent};
`;
