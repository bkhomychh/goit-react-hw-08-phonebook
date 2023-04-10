import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Title,
  Form,
  Label,
  Box,
  InputField,
  PasswordToggle,
  ErrorMessage,
  Check,
} from 'styles/FormStyles';

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must be at least 4 characters long')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(7, 'Must be at least 7 characters long')
        .required('Required'),
    }),
    onSubmit(values) {
      dispatch(authOperations.register(values));
    },
  });

  const togglePassword = () => {
    setIsPasswordShown(state => !state);
  };

  return (
    <>
      <Title>Registration</Title>
      <Form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
        <Label htmlFor="name">Name</Label>
        <Box>
          <InputField
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {/* Error message */}
          {formik.touched.name && formik.errors.name && (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          )}
          {/* Success */}
          {formik.touched.name && !formik.errors.name && <Check />}
        </Box>

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
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
}
