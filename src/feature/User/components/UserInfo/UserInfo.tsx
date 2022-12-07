import Avatar from '../../../../components/Avatar/Avatar';
import UserBookmarkButton from '../UserBookmarkButton/UserBookmarkButton';

import { QueryDataProps, UserProps } from '../../../../types';

import {
  StyledUserInfoWrapper,
  StyledUserContent,
  StyledUserContents,
  StyledUserInfo,
  StyledUserName,
  StyledUserRepositoryInfo,
} from './UserInfo.style';
import useToggleBookmark from '../../hooks/useToggleBookmark';

interface Props {
  user: UserProps | undefined;
  handleBookmark: (data: QueryDataProps) => void;
}

export default function UserInfo({ user, handleBookmark }: Props) {
  if (!user) return <>loading...</>;
  const { isBookmark, toggleBookmark } = useToggleBookmark(user.id);
  const {
    avatar_url: avatarUrl,
    login: username,
    id,
    name,
    bio,
    blog,
    email,
    company,
    public_repos: publicRepos,
  } = user;

  const bookmarkProps = { id, avatarUrl, username };

  return (
    <StyledUserInfoWrapper>
      <StyledUserInfo>
        <Avatar src={avatarUrl} size="lg" />
        <StyledUserName>
          <strong>{username}</strong>
          <span className="username">{name}</span>
          <span className="bio">{bio}</span>
        </StyledUserName>
      </StyledUserInfo>
      <StyledUserContents>
        <StyledUserContent>
          {blog && (
            <>
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579C16.1952 5.36683 16.1952 6.63316 15.4142 7.41421L12.4142 10.4142C11.6331 11.1953 10.3668 11.1953 9.58577 10.4142C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142C7.78103 10.8047 7.78103 11.4379 8.17156 11.8284C9.73365 13.3905 12.2663 13.3905 13.8284 11.8284L16.8284 8.82843C18.3905 7.26633 18.3905 4.73367 16.8284 3.17157C15.2663 1.60948 12.7337 1.60948 11.1716 3.17157L9.67156 4.67157C9.28103 5.0621 9.28103 5.69526 9.67156 6.08579C10.0621 6.47631 10.6952 6.47631 11.0858 6.08579L12.5858 4.58579ZM7.58579 9.58579C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579C10.8047 9.97631 11.4379 9.97631 11.8284 9.58579C12.219 9.19526 12.219 8.5621 11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L3.17157 11.1716C1.60948 12.7337 1.60948 15.2663 3.17157 16.8284C4.73367 18.3905 7.26633 18.3905 8.82843 16.8284L10.3284 15.3284C10.719 14.9379 10.719 14.3047 10.3284 13.9142C9.9379 13.5237 9.30474 13.5237 8.91421 13.9142L7.41421 15.4142C6.63316 16.1953 5.36684 16.1953 4.58579 15.4142C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858L7.58579 9.58579Z" />
              </svg>
              <a href={blog}>
                <span>Click to visit</span>
              </a>
            </>
          )}
        </StyledUserContent>
        <StyledUserContent>
          {email && (
            <>
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M8 4C6.34315 4 5 5.34315 5 7V11C5 13.7614 7.23858 16 10 16C12.7614 16 15 13.7614 15 11V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11V7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 5.34315 9.65685 4 8 4Z" />
              </svg>
              <span>{email}</span>
            </>
          )}
        </StyledUserContent>
        <StyledUserContent>
          {company && (
            <>
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H13C12.4477 18 12 17.5523 12 17V15C12 14.4477 11.5523 14 11 14H9C8.44772 14 8 14.4477 8 15V17C8 17.5523 7.55228 18 7 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16V4ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM11 5H13V7H11V5ZM13 9H11V11H13V9Z" />
              </svg>
              <span>{company}</span>
            </>
          )}
        </StyledUserContent>
        <StyledUserRepositoryInfo>
          {publicRepos} Repositories
        </StyledUserRepositoryInfo>
      </StyledUserContents>
      <UserBookmarkButton
        bookmarkProps={bookmarkProps}
        handleBookmark={handleBookmark}
        toggleBookmark={toggleBookmark}
        isBookmark={isBookmark}
      />
    </StyledUserInfoWrapper>
  );
}
