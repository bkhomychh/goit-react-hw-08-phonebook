import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/selectors';

import { Contact } from 'components/Contact';
import ContentLoader from 'components/ContentLoader';

import { StyledList, Wrapper } from './ContactList.styled';

import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <Wrapper>
      {filteredContacts.length > 0 && (
        <StyledList>
          {filteredContacts.map(({ id, name, phone }) => (
            <Contact id={id} name={name} phone={phone} key={id} />
          ))}
        </StyledList>
      )}
      {isLoading && <ContentLoader />}
    </Wrapper>
  );
};
