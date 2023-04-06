import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ToastContainer } from 'react-toastify';

import { Wrapper, Container, Title, Heading } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Heading>Contacts</Heading>
        <Filter />
        <ContactList />
        <ToastContainer autoClose={4000} limit={3} theme="colored" />
      </Container>
    </Wrapper>
  );
};
