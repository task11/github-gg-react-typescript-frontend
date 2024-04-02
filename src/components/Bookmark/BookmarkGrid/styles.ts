import styled from 'styled-components';

export const StyledBookmarkGrid = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(56px, auto);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;
