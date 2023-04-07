import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Title,
  RegistrationForm,
  Label,
  Box,
  InputField,
  PasswordToggle,
} from './Register.styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
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
      name,
      email,
      password,
    };
    dispatch(authOperations.register(credentials));
  };

  const togglePassword = () => {
    setIsPasswordShown(state => !state);
  };

  return (
    <>
      <Title>Registration</Title>
      <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name <InputField type="text" name="name" onChange={handleChange} />
        </Label>
        <Label>
          Email <InputField type="email" name="email" onChange={handleChange} />
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
        <Button type="submit">Register</Button>
      </RegistrationForm>
    </>
  );
}
