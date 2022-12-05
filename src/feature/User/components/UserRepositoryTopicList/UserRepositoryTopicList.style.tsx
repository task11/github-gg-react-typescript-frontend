import styled from 'styled-components';

export const StyledUserRepositoryTopicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .label {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const StyledRepositoryTopicList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const StyledRepositoryTopic = styled.div`
  font-size: 12px;
  padding: 4px 6px;
  background-color: #6893e3ad;
  border-radius: 32px;
`;
