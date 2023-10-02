import { useDispatch, useSelector } from 'react-redux';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { delNumber } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactName>{name}:</ContactName>{' '}
          <ContactNumber>{number}</ContactNumber>
          <DeleteButton onClick={() => dispatch(delNumber(id))}>
            Delete
          </DeleteButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
};
