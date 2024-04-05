import styled from 'styled-components';

export const StyledResultCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.bgColor.card};
  transition: background 0.3s ease-in, color 0.2s ease-in;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.fontColor.default};
  }

  @media screen and (min-width: 768px) {
    height: 64px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    height: 72px;
    font-size: 18px;
  }
`;

export const StyledResultInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  word-break: break-all;
`;
