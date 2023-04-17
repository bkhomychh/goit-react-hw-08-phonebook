import { useSelector } from 'react-redux';

import Contact from 'components/Contact';
import ContentLoader from 'components/ContentLoader';

import { filterSelectors } from 'redux/filter';

import { StyledList, Wrapper, Box } from './ContactList.styled';
import { useFetchContactsQuery } from 'services/contactsApi';

export default function ContactList() {
  const filter = useSelector(filterSelectors.selectFilter);
  const { data = [], isFetching } = useFetchContactsQuery();

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
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
          {isFetching && <ContentLoader />}
        </Wrapper>
      ) : (
        <Box>
          {isFetching ? <ContentLoader /> : <p>There are no contacts :(</p>}
        </Box>
      )}
    </>
  );
}
