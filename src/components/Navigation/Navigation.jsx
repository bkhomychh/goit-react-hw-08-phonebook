import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavBar, LinkList } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <NavBar>
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
}
