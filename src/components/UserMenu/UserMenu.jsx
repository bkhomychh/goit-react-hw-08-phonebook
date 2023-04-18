import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';
import { contactsApi } from 'services/contactsApi';

import { Wrapper, Username, AuthLinks } from './UserMenu.styled';

export default function UserMenu() {
  const username = useSelector(authSelectors.selectUsername);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <Username>{username ? username : 'Anonymous'}</Username>
          <Button type="button" onClick={handleLogOut}>
            Log out
          </Button>
        </>
      ) : (
        <AuthLinks>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </AuthLinks>
      )}
    </Wrapper>
  );
}
