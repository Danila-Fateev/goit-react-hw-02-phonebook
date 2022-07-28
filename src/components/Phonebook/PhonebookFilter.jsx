import PropTypes from 'prop-types';

export default function PhonebookFilter({ changeFilter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeFilter} />
    </label>
  );
}

PhonebookFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
