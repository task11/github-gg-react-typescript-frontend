import { useTheme } from '../../utils/hooks';

import Logo from '../../components/Logo/Logo';

import {
  StyledFooter,
  StyledLogoWrapper,
  StyledFooterItem,
  StyledFooterLink,
  StyledFooterNav,
  StyledFooterSection,
  StyledFooterWrapper,
} from './Footer.style';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledFooterSection>
          <StyledLogoWrapper>
            <Logo size="sm" mode={theme} />
          </StyledLogoWrapper>
          <StyledFooterItem>
            <strong>Contact</strong>
            <StyledFooterNav>
              <StyledFooterLink href="mailto:6539305@gmail.com">
                Mail
              </StyledFooterLink>
              <StyledFooterLink
                href="https://velog.io/@task11"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </StyledFooterLink>
              <StyledFooterLink
                href="https://github.com/task11"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </StyledFooterLink>
            </StyledFooterNav>
          </StyledFooterItem>
          <StyledFooterItem>
            <strong>Author</strong>
            <StyledFooterNav>
              <StyledFooterLink
                href="https://github.com/task11"
                target="_blank"
                rel="noreferrer"
              >
                Task11 🇰🇷
              </StyledFooterLink>
            </StyledFooterNav>
          </StyledFooterItem>
        </StyledFooterSection>
      </StyledFooterWrapper>
    </StyledFooter>
  );
}
