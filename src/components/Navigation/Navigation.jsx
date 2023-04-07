import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavBar, Logo, LinkList } from './Navigation.styled';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <NavBar>
      <Logo to="/">
        <FaPhoneSquareAlt />
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
