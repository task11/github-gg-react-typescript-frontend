import Avatar from '../../../../components/Avatar/Avatar';

import { UserInfoProps } from '../../../../types';

import { StyledUserInfo, StyledUserName } from './UserInfo.style';

interface Props {
  userInfo: UserInfoProps;
}

export default function UserInfo({ userInfo }: Props) {
  const { avatar_url: avatarUrl, login: userId, name, bio } = userInfo;
  return (
    <StyledUserInfo>
      <Avatar src={avatarUrl} size="lg" />
      <StyledUserName>
        <strong>{userId}</strong>
        <span className="username">{name}</span>
        <span className="bio">{bio}</span>
      </StyledUserName>
    </StyledUserInfo>
  );
}
