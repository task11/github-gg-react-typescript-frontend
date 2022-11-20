import { Outlet } from 'react-router-dom';

import { StyledMain } from './Main.style';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Navigation from '../../components/Navigation/Navigation';

export default function Main() {
  return (
    <StyledMain>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledMain>
  );
}
