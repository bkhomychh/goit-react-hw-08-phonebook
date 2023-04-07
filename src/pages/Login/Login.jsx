import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import Button from 'components/Button';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Title,
  LoginForm,
  Label,
  Box,
  InputField,
  PasswordToggle,
} from './Login.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      default:
        console.log('This field does not exist');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const credentials = {
      email,
      password,
    };
    dispatch(authOperations.logIn(credentials));
  };

  const togglePassword = () => {
    setIsPasswordShown(state => !state);
  };

  return (
    <>
      <Title>Login</Title>
      <LoginForm onSubmit={handleSubmit}>
        <Label>
          Email
          <InputField type="email" name="email" onChange={handleChange} />
        </Label>

        <Label htmlFor="password">Password</Label>
        <Box>
          <InputField
            id="password"
            type={isPasswordShown ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
          />
          <PasswordToggle onClick={togglePassword}>
            {isPasswordShown ? <BsEye /> : <BsEyeSlash />}
          </PasswordToggle>
        </Box>
        <Button>Log in</Button>
      </LoginForm>
    </>
  );
}
