import Avatar from '../../../../components/Avatar/Avatar';

import { StyledUserInfo, StyledUserName } from './UserInfo.style';

export default function UserInfo() {
  return (
    <StyledUserInfo>
      <Avatar src="https://picsum.photos/200" size="lg" />
      <StyledUserName>
        <strong>login</strong>
        <span className="username">username</span>
        <span className="bio">FE developer</span>
      </StyledUserName>
    </StyledUserInfo>
  );
}
