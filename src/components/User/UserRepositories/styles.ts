import styled from 'styled-components';

export const StyledUserRepositories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledUserRepositoriesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUserRepositoryInfo = styled.header`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  padding: 10px 10px 0 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor.top};
  color: ${(props) => props.theme.fontColor.default};
`;

export const StyledEmptyRepositories = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor.accent};
`;
