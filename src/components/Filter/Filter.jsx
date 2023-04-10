import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';
import { filterSelectors } from 'redux/filter';

import { Label, SearchField } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(filterSelectors.selectFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Label>
      Search
      <SearchField
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        placeholder="Contact name..."
        onChange={handleChange}
      />
    </Label>
  );
}
