import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDeleteContactMutation } from 'services/contactsApi';

import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';

import { Item, Name, Phone, DeleteBtn, EditBtn, Box } from './Contact.styled';
import { BsTrash3Fill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { getErrorMessage } from 'utils';

export default function Contact({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteContact] = useDeleteContactMutation();

  const handleClick = () => {
    deleteContact({ id, name })
      .unwrap()
      .then(({ name }) =>
        toast.success(`${name} has been deleted from your contacts`)
      )
      .catch(err => toast.error(getErrorMessage(err)));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Item>
      <Name>{name}:</Name>
      <Phone>{number}</Phone>
      <Box>
        <EditBtn type="button" onClick={openModal}>
          <BiEditAlt />
        </EditBtn>
        <DeleteBtn type="button" onClick={handleClick}>
          <BsTrash3Fill />
        </DeleteBtn>
      </Box>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <ContactForm
            contact={{ id, name, number }}
            closeModal={closeModal}
            editing
          />
        </Modal>
      )}
    </Item>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
