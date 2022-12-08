import styled from 'styled-components';

export const StyledUserRepositoryChart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-height: 500px;
  background-color: ${(props) => props.theme.bgColor.card};
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
`;

export const StyledUserRepositoryInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .repository-type {
    color: ${(props) => props.theme.fontColor.accent};
  }
`;

export const StyledRepositoryContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  background-color: ${(props) => props.theme.bgColor.background};
  padding: 6px;
  border-radius: 8px;

  .label {
    font-weight: 300;
  }

  .description {
    line-height: 1.4;
  }
`;

export const StyledChartWrapper = styled.div`
  width: 100%;

  .label {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 5px;
  }
`;

export const StyledRepositoryLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.borderColor.top};
  padding-top: 12px;
`;

export const StyledRepositoryLink = styled.a`
  color: ${(props) => props.theme.fontColor.default};

  &:visited {
    color: ${(props) => props.theme.fontColor.default};
  }

  &:hover {
    color: ${(props) => props.theme.fontColor.accent};
  }
`;
