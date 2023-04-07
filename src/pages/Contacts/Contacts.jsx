import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Heading } from './Contacts.styled';

export default function Contacts() {
  return (
    <>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </>
  );
}
