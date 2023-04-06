import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Title, Heading } from './Contacts.styled';

export default function Contacts() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </>
  );
}
