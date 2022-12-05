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
import { useToggle } from '../../../../utils/hooks';

interface Props {
  repository: RepositoryProps;
}

export default function UserRepository({ repository }: Props) {
  const { toggleState, handleToggle } = useToggle();

  return (
    <>
      <StyledUserRepository onClick={handleToggle}>
        <StyledUserRepositoryTitle>
          <span className="label">Repository</span>
          <strong>{repository.name}</strong>
        </StyledUserRepositoryTitle>
        <UserRepositoryTopicList topics={repository.topics} />
        <StyledDropdown>
          {toggleState ? <Icons.OutlineClose /> : <Icons.OutlineOpen />}
        </StyledDropdown>
      </StyledUserRepository>
      {toggleState && <UserRepositoryChart repository={repository} />}
    </>
  );
}
