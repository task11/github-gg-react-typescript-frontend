import styled from 'styled-components';

export const StyledUserRepositoriesHeader = styled.header`
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
  border-top: 1px solid rgba(108, 108, 108, 0.69);
  color: ${(props) => props.theme.fontColor.default};
`;

export const StyledUserRepositories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTarget = styled.div`
  height: 1px;
`;
