import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';

import { Form, Label, AddBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const toastId = useRef(null);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const resetState = () => {
    setName('');
    setPhone('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        toast.error('This field does not exist');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const formattedName = name.toLowerCase();
    const isNewContact = contacts.every(
      contact => contact.name.toLowerCase() !== formattedName
    );

    if (!isNewContact) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.warn(`${name} is already in your contacts.`);
      }
      return;
    }

    dispatch(addContact({ name, phone }));
    resetState();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Phone number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </Label>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};
