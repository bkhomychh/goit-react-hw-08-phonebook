import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Button from 'components/Button';
import {
  Box,
  Container,
  Check,
  Form,
  InputField,
  Label,
  ErrorMessage,
} from 'styles/FormStyles';

import { contactsSelectors } from 'redux/contacts';
import { addContact, editContact } from 'redux/contacts/contactsOperations';

export default function ContactForm(props) {
  const {
    contact: { id, name, number } = {},
    editing = false,
    closeModal,
  } = props;

  const toastId = useRef(null);
  const contacts = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      name: name ?? '',
      number: number ?? '',
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
    onSubmit(values, { resetForm }) {
      const formattedName = values.name.toLowerCase();
      const isNewContact = contacts.every(
        contact => contact.name.toLowerCase() !== formattedName
      );

      if (!isNewContact && !editing) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.warn(
            `${values.name} is already in your contacts.`
          );
        }
        return;
      }

      if (editing) {
        dispatch(editContact({ id, ...values }));
      } else {
        dispatch(addContact({ ...values }));
      }
      resetForm();
      closeModal();
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      boxShadowHidden
      autoComplete="off"
      noValidate
    >
      <Label htmlFor="name">Name</Label>
      <Box>
        <InputField
          id="name"
          type="text"
          name="name"
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
      {editing ? (
        <Container>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </Container>
      ) : (
        <Button type="submit">Add contact</Button>
      )}
    </Form>
  );
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  editing: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};
