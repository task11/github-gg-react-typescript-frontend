import { CommitProps } from '../../../types';

import Icons from '../../Icons';

import {
  StyledCommentWapper,
  StyledCommitContent,
  StyledCommitDate,
  StyledCommitMessage,
  StyledCommitSectionContent,
  StyledCommitSectionHeader,
} from './styles';

interface Props {
  commitContent: CommitProps;
}

export default function UserCommitContents({ commitContent }: Props) {
  const { author, commit } = commitContent;

  const commitDate = commit.author.date.split('T')[0];

  return (
    <StyledCommitContent to={`/${author.login}/commit/${commit.tree.sha}`}>
      <StyledCommitDate>
        <StyledCommitSectionHeader>
          <span className="label">Date</span>
        </StyledCommitSectionHeader>
        <StyledCommitSectionContent>
          <span>{commitDate}</span>
        </StyledCommitSectionContent>
      </StyledCommitDate>
      <StyledCommitMessage>
        <StyledCommitSectionHeader>
          <span className="label">Message</span>
        </StyledCommitSectionHeader>
        <div>{commit.message}</div>
      </StyledCommitMessage>

      <StyledCommentWapper>
        <Icons.Comment />
        <div>{commit.comment_count}</div>
      </StyledCommentWapper>
    </StyledCommitContent>
  );
}
