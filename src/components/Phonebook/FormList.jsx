import { useDispatch, useSelector } from 'react-redux';
import { ContactBtn, ContactSpan, FilterContactsBtn } from './PhoneForm.styled';
import {
  deleteContact,
  restoreDeletedContacts,
} from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectRestoredContacts,
} from 'redux/contacts/selectors';

export const FormList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // console.log(filteredContacts);
  const restoredContacts = useSelector(selectRestoredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const resetChanges = () => {
    dispatch(restoreDeletedContacts(restoredContacts));
  };

  if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
    console.log(filteredContacts);
    return null;
  }
  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <ContactSpan>{name}:</ContactSpan>
            <ContactSpan>{number}</ContactSpan>
            <FilterContactsBtn onClick={() => onDeleteContact(id)}>
              Delete
            </FilterContactsBtn>
          </li>
        ))}
      </ul>
      <ContactBtn onClick={resetChanges}>Reset</ContactBtn>
    </div>
  );
};
