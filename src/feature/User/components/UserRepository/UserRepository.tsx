import { useState } from 'react';

import Icons from '../../../../components/Icons';
import UserRepositoryChart from '../UserRepositoryChart/UserRepositoryChart';
import UserRepositoryTopicList from '../UserRepositoryTopicList/UserRepositoryTopicList';

import { RepositoryProps } from '../../../../types';

import {
  StyledDropdown,
  StyledUserRepository,
  StyledUserRepositoryTitle,
} from './UserRepository.style';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepository({ repository }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <StyledUserRepository onClick={() => setToggle((curr) => !curr)}>
        <StyledUserRepositoryTitle>
          <span className="label">Repository</span>
          <strong>{repository.name}</strong>
        </StyledUserRepositoryTitle>
        <UserRepositoryTopicList topics={repository.topics} />
        <StyledDropdown>
          {toggle ? <Icons.OutlineClose /> : <Icons.OutlineOpen />}
        </StyledDropdown>
      </StyledUserRepository>
      {toggle && <UserRepositoryChart repository={repository} />}
    </>
  );
}
