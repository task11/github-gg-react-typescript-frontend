import styled from 'styled-components';

export const StyledUserCommit = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUserCommitsHeader = styled.header`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  padding: 10px 10px 0 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor.top};
  color: ${(props) => props.theme.fontColor.default};
`;

export const StyledUserCommits = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 100%;
  min-height: 200px;
  background-color: ${(props) => props.theme.bgColor.card};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  transition: background 0.2s ease-in;
`;
