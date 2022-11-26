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
  transition: all 0.3s ease-in, color 0.2s ease-in;
  border: 1px solid ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
`;

export const StyledResultInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
