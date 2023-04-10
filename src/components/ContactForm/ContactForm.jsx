import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';

import Button from 'components/Button';
import {
  Box,
  Check,
  ErrorNote,
  Form,
  InputField,
  Label,
  ErrorMessage,
} from './ContactForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ closeModal }) => {
  const toastId = useRef(null);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       toast.error('This field does not exist');
  //   }
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();

  //   const formattedName = name.toLowerCase();
  //   const isNewContact = contacts.every(
  //     contact => contact.name.toLowerCase() !== formattedName
  //   );

  //   if (!isNewContact) {
  //     if (!toast.isActive(toastId.current)) {
  //       toastId.current = toast.warn(`${name} is already in your contacts.`);
  //     }
  //     return;
  //   }

  //   dispatch(addContact({ name, number }));
  //   resetState();
  //   closeModal();
  // };

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must be at least 4 characters long')
        .required('Required'),
      number: Yup.string()
        .min(10, 'Must be at least 10 characters long')
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    }),
    onSubmit(values) {
      // dispatch(addContact(values));
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
      <Label htmlFor="name">Name</Label>
      <Box>
        <InputField
          id="name"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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

      <Label htmlFor="number">Phone number</Label>
      <Box>
        <InputField
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formik.values.number}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {/* Error message */}
        {formik.touched.number && formik.errors.number && (
          <ErrorMessage>{formik.errors.number}</ErrorMessage>
        )}
        {/* Success */}
        {formik.touched.number && !formik.errors.number && <Check />}
      </Box>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
