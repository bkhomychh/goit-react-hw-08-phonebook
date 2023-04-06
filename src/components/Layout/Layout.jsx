import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

import { ToastContainer } from 'react-toastify';
import { Wrapper, Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <Navigation />
            <UserMenu />
          </Header>

          <main>
            <Outlet />
          </main>

          <footer></footer>
          <ToastContainer autoClose={4000} limit={3} theme="colored" />
        </Container>
      </Wrapper>
    </>
  );
};

export default Layout;
