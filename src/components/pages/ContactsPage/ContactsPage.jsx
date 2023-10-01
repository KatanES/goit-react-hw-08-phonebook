import { ContactFilter } from '../../Phonebook/ContactFilter';
import { FormList } from '../../Phonebook/FormList';
import { PhoneForm } from '../../Phonebook/PhoneForm';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <title>PhoneBook</title>

      <PhoneForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactFilter />
      <FormList />
    </div>
  );
};
