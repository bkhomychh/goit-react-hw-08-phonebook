import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { Box, Text } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Box>
      {isLoggedIn ? (
        <Text>Create a personal phone book and manage your contacts</Text>
      ) : (
        <Text>Please log in or sign up to get started</Text>
      )}
    </Box>
  );
}
