import styled from 'styled-components';

export const StyledResultCardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;
