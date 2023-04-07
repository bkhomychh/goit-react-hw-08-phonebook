import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <h1>PhoneBook</h1>

      {isLoggedIn ? (
        <b>Create a personal phone book and manage your contacts</b>
      ) : (
        <b>Please log in or sign up to get started</b>
      )}
    </>
  );
}
