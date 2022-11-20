import { Outlet } from 'react-router-dom';

import { StyledMain } from './Main.style';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Content from '../Content/Content';

export default function Main() {
  return (
    <StyledMain>
      <Header>
        <nav>aa</nav>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledMain>
  );
}
