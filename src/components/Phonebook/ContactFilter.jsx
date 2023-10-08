import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterInput } from './PhoneForm.styled';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeContactFilter = evt => {
    dispatch(setContactFilter(evt.target.value.toLowerCase().trim()));
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeContactFilter}
      ></FilterInput>
    </div>
  );
};
