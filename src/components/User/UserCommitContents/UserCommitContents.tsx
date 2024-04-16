import { CommitProps } from '../../../types';

import Icons from '../../Icons';

import {
  StyledCommentWapper,
  StyledCommitContent,
  StyledCommitDate,
  StyledCommitMessage,
  StyledCommitMessageWrapper,
  StyledCommitSectionContent,
  StyledCommitSectionContentDate,
  StyledCommitSectionHeader,
} from './styles';

interface Props {
  commitContent: CommitProps;
}

export default function UserCommitContents({ commitContent }: Props) {
  const { html_url: commitUrl, commit } = commitContent;

  const commitDate = commit.author.date.split('T')[0];

  const repoName = commit.url.split('/').slice(5, 6)[0];

  return (
    <StyledCommitContent href={commitUrl} target="_blank">
      <StyledCommitDate>
        <StyledCommitSectionHeader>
          <span className="label">Repository</span>
        </StyledCommitSectionHeader>
        <StyledCommitSectionContent>
          <span>{repoName}</span>
        </StyledCommitSectionContent>
      </StyledCommitDate>
      <StyledCommitMessageWrapper>
        <StyledCommitSectionHeader>
          <span className="label">Commit Message</span>
        </StyledCommitSectionHeader>
        <StyledCommitMessage>
          <span>{commit.message}</span>
        </StyledCommitMessage>
      </StyledCommitMessageWrapper>

      <StyledCommentWapper>
        <StyledCommitDate>
          <StyledCommitSectionContentDate>
            <span>{commitDate}</span>
          </StyledCommitSectionContentDate>
        </StyledCommitDate>
        <Icons.Comment />
        <div>{commit.comment_count}</div>
      </StyledCommentWapper>
    </StyledCommitContent>
  );
}
