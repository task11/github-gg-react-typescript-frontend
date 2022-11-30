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
