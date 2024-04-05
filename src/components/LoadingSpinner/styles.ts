import styled from 'styled-components';

export const StyledLoadingSpinner = styled.div`
  border: 4px solid ${(props) => props.theme.bgColor.card};
  border-top: 4px solid ${(props) => props.theme.bgColor.header};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
