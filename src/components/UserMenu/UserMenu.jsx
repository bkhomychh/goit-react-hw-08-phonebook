import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const username = useSelector(authSelectors.selectUsername);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{username ? username : 'Anonymous'}</p>
          <button type="button" onClick={handleLogOut}>
            Log out
          </button>
        </>
      ) : (
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
