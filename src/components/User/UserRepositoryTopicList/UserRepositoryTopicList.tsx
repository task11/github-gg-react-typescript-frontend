import { TopicsProps } from '../../../types';

import {
  StyledRepositoryTopic,
  StyledRepositoryTopicList,
  StyledUserRepositoryTopicList,
} from './styles';

interface Props {
  topics: TopicsProps;
}

export default function UserRepositoryTopicList({ topics }: Props) {
  if (!topics.length) return <></>;

  return (
    <StyledUserRepositoryTopicList>
      <span className="label">Topics</span>
      <StyledRepositoryTopicList>
        {topics.map((topic, idx) => (
          <StyledRepositoryTopic key={idx}>{topic}</StyledRepositoryTopic>
        ))}
      </StyledRepositoryTopicList>
    </StyledUserRepositoryTopicList>
  );
}
