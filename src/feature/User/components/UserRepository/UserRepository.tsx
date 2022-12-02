import Icons from '../../../../components/Icons';
import UserRepositoryTopicList from '../UserRepositoryTopicList/UserRepositoryTopicList';

import { RepositoryProps } from '../../../../types';

import { StyledDropdown, StyledUserRepository } from './UserRepository.style';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepository({ repository }: Props) {
  return (
    <StyledUserRepository>
      <strong>{repository.name}</strong>
      <UserRepositoryTopicList topics={repository.topics} />
      <StyledDropdown>
        <Icons.OutlineArrowDown />
      </StyledDropdown>
    </StyledUserRepository>
  );
}
