import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  width: 100%;
  padding-top: 16px;
`;

export const StyledSearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 490px;
  height: 73px;
  align-items: center;

  .focus-input {
    border: 2px solid rgb(25, 118, 210);
  }
`;

export const StyledInputButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 42px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  padding-right: 8px;
`;

export const StyledInputWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.018em;
  line-height: 1.6;
  font-weight: 400;
  border: none;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const StyledInputWithLabel = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  .label {
    cursor: default;
  }
  .label-title {
    opacity: 0;
    font-family: inherit;
    line-height: 4px;
  }
  .search-input-wrapper {
    flex-direction: row;
    align-items: center;
    display: flex;
    position: relative;
  }
  .input-wrapper {
    align-items: center;
    width: 100%;
    display: flex;
  }
  .icon-placeholder {
    display: flex;
    flex-direction: row;
  }
  .icon-placeholder-wrapper {
    color: #a7afb7;
    position: absolute;
    pointer-events: none;
  }
  .search-icon {
    width: 16px;
    height: 16px;
    margin-right: 12px;

    svg {
      fill: #a7afb7;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  flex: 1;
  padding-right: 25px;
  padding-left: 10px;
  outline-offset: -2px;
  border: none;
  caret-color: black;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    outline: 0;
  }
`;

export const StyledButton = styled.button`
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  display: flex;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonColor};
  display: flex;
  color: ${(props) => props.theme.fontColor.header};
  justify-content: center;
  align-items: center;
`;

export const StyledIconButton = styled.div`
  font-family: inherit;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
`;

export const StyledIcon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    fill: ${(props) => props.theme.fontColor.header};
  }
`;

export const StyledCancel = styled.span`
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  font-weight: 400;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: ${(props) => props.theme.fontColor.header};
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.buttonColor};
  }
`;
