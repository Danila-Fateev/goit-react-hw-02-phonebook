import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

export default function PhonebookForm({ handleChange, onSubmitForm }) {
  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <label className={styles.labelForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={styles.labelForm}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

PhonebookForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
