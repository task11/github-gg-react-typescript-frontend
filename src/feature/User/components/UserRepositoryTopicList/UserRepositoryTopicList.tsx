import {
  StyledRepositoryTopic,
  StyledRepositoryTopicList,
} from './UserRepositoryTopicList.style';

export default function UserRepositoryTopicList() {
  return (
    <StyledRepositoryTopicList>
      <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
      <StyledRepositoryTopic>react</StyledRepositoryTopic>
      <StyledRepositoryTopic>next</StyledRepositoryTopic>
    </StyledRepositoryTopicList>
  );
}
