import Icons from '../../Icons';

import useToggle from '../../../utils/hooks/useToggle';

import UserRepositoryChart from '../UserRepositoryChart';
import UserRepositoryTopicList from '../UserRepositoryTopicList';

import { RepositoryProps } from '../../../types';

import {
  StyledDropdown,
  StyledUserRepository,
  StyledUserRepositoryTitle,
} from './styles';

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
        <StyledDropdown
          type="button"
          name="chart-button"
          aria-label="flip repository chart"
        >
          {toggleState ? <Icons.OutlineClose /> : <Icons.OutlineOpen />}
        </StyledDropdown>
      </StyledUserRepository>
      {toggleState && <UserRepositoryChart repository={repository} />}
    </>
  );
}
