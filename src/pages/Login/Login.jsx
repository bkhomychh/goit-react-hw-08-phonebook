import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Title,
  LoginForm,
  Label,
  Box,
  InputField,
  PasswordToggle,
  ErrorMessage,
  Check,
} from './Login.styled';

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(7, 'Must be at least 7 characters long')
        .required('Required'),
    }),
    onSubmit: (values, actions) => {
      dispatch(authOperations.logIn(values));
    },
  });

  const togglePassword = () => {
    setIsPasswordShown(state => !state);
  };

  return (
    <>
      <Title>Login</Title>
      <LoginForm onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
        <Label htmlFor="email">Email</Label>
        <Box>
          <InputField
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {/* Error message */}
          {formik.touched.email && formik.errors.email && (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          )}
          {/* Success */}
          {formik.touched.email && !formik.errors.email && <Check />}
        </Box>

        <Label htmlFor="password">Password</Label>
        <Box>
          <InputField
            id="password"
            type={isPasswordShown ? 'text' : 'password'}
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <PasswordToggle type="button" onClick={togglePassword}>
            {isPasswordShown ? <BsEye /> : <BsEyeSlash />}
          </PasswordToggle>
          {/* Error message */}
          {formik.touched.password && formik.errors.password && (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          )}
          {/* Success */}
          {formik.touched.password && !formik.errors.password && <Check />}
        </Box>
        <Button type="submit">Log in</Button>
      </LoginForm>
    </>
  );
}
