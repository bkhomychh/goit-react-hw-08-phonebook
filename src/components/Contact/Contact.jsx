import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Name, Phone, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}: </Name>
      <Phone>{phone}</Phone>
      <DeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact({ id, name }));
        }}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
