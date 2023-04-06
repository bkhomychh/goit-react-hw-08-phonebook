import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Label, SearchField } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Label>
      Find contacts by name
      <SearchField
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={handleChange}
      />
    </Label>
  );
};
