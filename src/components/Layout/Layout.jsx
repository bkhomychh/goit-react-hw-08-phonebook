import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import ContentLoader from 'components/ContentLoader';

import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Container,
  Box,
  Header,
  Main,
  Footer,
  Signature,
  Logo,
  MenuToggle,
} from './Layout.styled';
import { BsGithub } from 'react-icons/bs';
import { TiContacts } from 'react-icons/ti';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { GlobalStyle } from 'styles/GlobalStyles';
import { useMediaQuery } from 'hooks';

const Layout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const matches = useMediaQuery('768px');

  const toggleMenu = () => setIsMenuVisible(state => !state);

  return (
    <>
      <Wrapper>
        <Header>
          <Container>
            <Box>
              <Logo to="/">
                <TiContacts />
                PhoneBook
              </Logo>
              {!matches && (
                <MenuToggle onClick={toggleMenu}>
                  {isMenuVisible ? <RxCross1 /> : <RxHamburgerMenu />}
                </MenuToggle>
              )}
            </Box>
            {(isMenuVisible || matches) && (
              <Box>
                <Navigation />
                <UserMenu />
              </Box>
            )}
          </Container>
        </Header>

        <Main>
          <Container>
            <Suspense fallback={<ContentLoader />}>
              <Outlet />
            </Suspense>
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
