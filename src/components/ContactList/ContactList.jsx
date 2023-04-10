import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Contact } from 'components/Contact';
import ContentLoader from 'components/ContentLoader';

import { StyledList, Wrapper } from './ContactList.styled';

import { contactsSelectors } from 'redux/contacts';
import { filterSelectors } from 'redux/filter';
import { contactsOperations } from 'redux/contacts';

export const ContactList = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const filter = useSelector(filterSelectors.selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <>
      {filteredContacts.length > 0 ? (
        <Wrapper>
          <StyledList>
            {filteredContacts.map(({ id, name, number }) => (
              <Contact id={id} name={name} number={number} key={id} />
            ))}
          </StyledList>
          {isLoading && <ContentLoader />}
        </Wrapper>
      ) : (
        <p>There are no contacts :(</p>
      )}
    </>
  );
};
