import { StyledError, StyledErrorWrapper } from './styles';

export default function Error() {
  return (
    <StyledErrorWrapper>
      <StyledError>에러가 발생하였습니다. </StyledError>
      <StyledError>다시 시도해주세요. </StyledError>
    </StyledErrorWrapper>
  );
}
