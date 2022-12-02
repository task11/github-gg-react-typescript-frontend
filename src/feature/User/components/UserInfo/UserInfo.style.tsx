import styled from 'styled-components';

export const StyledUserInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  strong {
    font-size: 24px;
    font-weight: 600;
  }

  .username {
    font-size: 20px;
  }

  .bio {
    word-break: break-all;
  }
`;

export const StyledUserContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledUserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;

  svg path {
    fill: ${(props) => props.theme.fontColor.default};
  }

  a {
    color: ${(props) => props.theme.fontColor.default};
    transition: color 0.2s ease-in;

    &:visited {
      color: ${(props) => props.theme.fontColor.default};
    }

    &:hover {
      color: ${(props) => props.theme.fontColor.accent};
    }
  }
`;

export const StyledUserRepositoryInfo = styled.header`
  font-size: 14px;
  font-weight: 300;
  margin-top: 20px;
  padding: 10px 10px 0 10px;
  border-top: 1px solid rgba(108, 108, 108, 0.69);
  color: ${(props) => props.theme.fontColor.default};
`;
