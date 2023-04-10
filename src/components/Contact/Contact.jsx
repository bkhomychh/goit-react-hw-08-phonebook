import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

import { Item, Name, Phone, DeleteBtn, EditBtn, Box } from './Contact.styled';
import { BsTrash3Fill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { useState } from 'react';
import Modal from 'components/Modal';
import { ContactForm } from 'components/ContactForm';

export const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

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
        <DeleteBtn
          type="button"
          onClick={() => {
            dispatch(deleteContact({ id, name }));
          }}
        >
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
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
