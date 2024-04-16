import styled from 'styled-components';

export const StyledCommitContent = styled.a`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor.default};

  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:nth-child(n + 2) {
    border-top: 1px solid ${(props) => props.theme.borderColor.top};
  }

  &:hover {
    background-color: ${(props) => props.theme.bgColor.cardHover};
  }

  &:visited {
    color: ${(props) => props.theme.fontColor.default};
  }
`;

export const StyledCommitDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  gap: 8px;
`;

export const StyledCommitSectionHeader = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

export const StyledCommitSectionContent = styled.div`
  width: 100%;
`;

export const StyledCommitSectionContentDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  font-size: 12px;
  font-weight: 300;
`;

export const StyledCommitMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  gap: 8px;
`;

export const StyledCommitMessage = styled.div`
  color: ${(props) => props.theme.fontColor.accent};
`;

export const StyledCommentWapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: end;
  font-weight: bold;
  font-size: 14px;

  svg {
    path {
      fill: ${(props) => props.theme.fontColor.default};
    }
  }
`;
