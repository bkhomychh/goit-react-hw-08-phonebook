import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavBar, Logo, LinkList } from './Navigation.styled';
import { TiContacts } from 'react-icons/ti';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <NavBar>
      <Logo to="/">
        <TiContacts />
        PhoneBook
      </Logo>

      <LinkList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </LinkList>
    </NavBar>
  );
};

export default Navigation;
