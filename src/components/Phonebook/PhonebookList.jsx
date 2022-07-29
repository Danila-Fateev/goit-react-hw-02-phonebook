import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

export default function PhonebookList({ filteredItems, deleteContact }) {
  return (
    <>
      {filteredItems.map(({ number, id, name }) => {
        <li key={id} className={styles.listItem} id={id}>
          {name}: {number}
          <button
            className={styles.itemBtn}
            type="button"
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>;
      })}
    </>
  );
}

PhonebookList.propTypes = {
  filteredItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
