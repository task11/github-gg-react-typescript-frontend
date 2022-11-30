import Icons from '../../../../components/Icons';
import UserRepositoryTopicList from '../UserRepositoryTopicList/UserRepositoryTopicList';

import { StyledDropdown, StyledUserRepository } from './UserRepository.style';

export default function UserRepository() {
  return (
    <StyledUserRepository>
      <strong>algorithm-javascript-legacy</strong>
      <UserRepositoryTopicList />
      <StyledDropdown>
        <Icons.OutlineArrowDown />
      </StyledDropdown>
    </StyledUserRepository>
  );
}
