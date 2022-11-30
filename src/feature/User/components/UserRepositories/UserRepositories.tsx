import Icons from '../../../../components/Icons';

import {
  StyledDropdown,
  StyledRepositoryTopic,
  StyledRepositoryTopicList,
  StyledTarget,
  StyledUserRepository,
  StyledUserRepositoryList,
  StyledUserRepositoryListHeader,
} from './UserRepositories.style';

export default function UserRepositories() {
  return (
    <StyledUserRepositoryList>
      <StyledUserRepositoryListHeader>
        42 Repositories
      </StyledUserRepositoryListHeader>
      <StyledUserRepository>
        <strong>algorithm-javascript-legacy</strong>
        <StyledRepositoryTopicList>
          <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
          <StyledRepositoryTopic>react</StyledRepositoryTopic>
          <StyledRepositoryTopic>next</StyledRepositoryTopic>
        </StyledRepositoryTopicList>
        <StyledDropdown>
          <Icons.OutlineArrowDown />
        </StyledDropdown>
      </StyledUserRepository>
      <StyledUserRepository>
        <strong>algorithm-javascript-legacy</strong>
        <StyledRepositoryTopicList>
          <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
          <StyledRepositoryTopic>react</StyledRepositoryTopic>
          <StyledRepositoryTopic>next</StyledRepositoryTopic>
        </StyledRepositoryTopicList>
        <StyledDropdown>
          <Icons.OutlineArrowDown />
        </StyledDropdown>
      </StyledUserRepository>
      <StyledUserRepository>
        <strong>minirepo-vanilla-javascript-frontend</strong>
        <StyledRepositoryTopicList>
          <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
          <StyledRepositoryTopic>react</StyledRepositoryTopic>
          <StyledRepositoryTopic>next</StyledRepositoryTopic>
          <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
          <StyledRepositoryTopic>react</StyledRepositoryTopic>
          <StyledRepositoryTopic>next</StyledRepositoryTopic>
          <StyledRepositoryTopic>typescript</StyledRepositoryTopic>
          <StyledRepositoryTopic>react</StyledRepositoryTopic>
          <StyledRepositoryTopic>next</StyledRepositoryTopic>
        </StyledRepositoryTopicList>
        <StyledDropdown>
          <Icons.OutlineArrowDown />
        </StyledDropdown>
      </StyledUserRepository>
      <StyledTarget />
    </StyledUserRepositoryList>
  );
}
