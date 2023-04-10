import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Container,
  Box,
  Header,
  Main,
  Footer,
  Signature,
} from './Layout.styled';
import { BsGithub } from 'react-icons/bs';
import { GlobalStyle } from 'styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Container>
            <Box>
              <Navigation />
              <UserMenu />
            </Box>
          </Container>
        </Header>

        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>

        <Footer>
          <Container>
            <Signature>
              Created by
              <a
                href="https://github.com/bkhomychh"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                bkhomychh
                <BsGithub />
              </a>
            </Signature>
          </Container>
        </Footer>
        <GlobalStyle />
        <ToastContainer autoClose={4000} limit={3} theme="colored" />
      </Wrapper>
    </>
  );
};

export default Layout;
