import styled from 'styled-components';

export const StyledUserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const StyledUserEmpty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  height: 150px;
  background-color: ${(props) => props.theme.bgColor.card};
`;

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

  .username {
    font-size: 20px;
  }

  .bio {
    word-break: break-all;
  }
`;

export const StyledUserNameHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  strong {
    font-size: 24px;
    font-weight: 600;
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
