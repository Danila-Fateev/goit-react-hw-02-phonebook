import PropTypes from 'prop-types';

export default function PhonebookFilter({ changeFilter, value }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeFilter} value={value} />
    </label>
  );
}

PhonebookFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
