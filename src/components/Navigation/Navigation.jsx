import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { FaPhoneSquareAlt } from 'react-icons/fa';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <Link to="/">
        <FaPhoneSquareAlt />
        PhoneBook
      </Link>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
