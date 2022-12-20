import React from 'react';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/Slice';
import css from './Filter.module.css'

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.target.value));

  return (
    <label className={css.label}>
      Find contacts by Name
      <input
        className={css.filterForm}
        type="text"
        name="filterForm"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
