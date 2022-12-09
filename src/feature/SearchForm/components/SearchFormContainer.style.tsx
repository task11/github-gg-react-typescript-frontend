import styled from 'styled-components';

export const StyledSearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 320px;
  }
`;
