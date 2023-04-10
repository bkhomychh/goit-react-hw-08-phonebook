import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Name, Phone, DeleteBtn } from './Contact.styled';
import { BsTrash3Fill } from 'react-icons/bs';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}: </Name>
      <Phone>{number}</Phone>
      <DeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact({ id, name }));
        }}
      >
        <BsTrash3Fill />
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
