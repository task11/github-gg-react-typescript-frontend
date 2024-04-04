import styled from 'styled-components';

export const StyledUser = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 16px;
`;

export const StyledUserContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }

  @media screen and (min-width: 1024px) {
    width: 520px;
  }
`;

export const StyledTarget = styled.div`
  height: 1px;
`;

export const StyledErrorWrapper = styled.div`
  width: 100%;
  height: 300px;
`;
