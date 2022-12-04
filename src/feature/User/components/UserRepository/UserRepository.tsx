import { useState } from 'react';
import Icons from '../../../../components/Icons';
import UserRepositoryTopicList from '../UserRepositoryTopicList/UserRepositoryTopicList';

import { RepositoryProps } from '../../../../types';

import { StyledDropdown, StyledUserRepository } from './UserRepository.style';

import UserRepositoryCart from '../UserRepositoryCart/UserRepositoryCart';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepository({ repository }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <StyledUserRepository onClick={() => setToggle((curr) => !curr)}>
        <strong>{repository.name}</strong>
        <UserRepositoryTopicList topics={repository.topics} />
        <StyledDropdown>
          <Icons.OutlineArrowDown />
        </StyledDropdown>
      </StyledUserRepository>
      {toggle && <UserRepositoryCart />}
    </>
  );
}
