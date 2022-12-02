import { TopicsProps } from '../../../../types';
import {
  StyledRepositoryTopic,
  StyledRepositoryTopicList,
} from './UserRepositoryTopicList.style';

interface Props {
  topics: TopicsProps;
}

export default function UserRepositoryTopicList({ topics }: Props) {
  return (
    <StyledRepositoryTopicList>
      {topics.map((topic, idx) => (
        <StyledRepositoryTopic key={idx}>{topic}</StyledRepositoryTopic>
      ))}
    </StyledRepositoryTopicList>
  );
}
