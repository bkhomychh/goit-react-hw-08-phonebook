import { useState } from 'react';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import Button from 'components/Button';

import { Heading, Box } from './Contacts.styled';
import { IoMdAddCircleOutline } from 'react-icons/io';

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box>
        <Heading>Contacts</Heading>
        <Button onClick={openModal}>
          <IoMdAddCircleOutline />
          Add contact
        </Button>
      </Box>

      <Filter />
      <ContactList />
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <ContactForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
