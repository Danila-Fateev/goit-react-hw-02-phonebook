import PropTypes from 'prop-types';

export default function PhonebookList({ id, name, number, deleteContact }) {
  return (
    <>
      <li id={id}>
        {name}: {number}
        <button type="button" onClick={deleteContact}>
          Delete
        </button>
      </li>
    </>
  );
}

PhonebookList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
