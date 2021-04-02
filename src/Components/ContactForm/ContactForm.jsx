import styles from './ContactForm.module.scss';
import ContactsList from '../ContactsList';
import { useState } from 'react';

const ContactForm = () => {
  const [contacts, setContacts] = useState('');

  const handleAddContacts = e => setContacts(e.target.value);

  //   const handleAddProduct = newItem => {
  //     setContacts(prev => [...prev, newItem]);
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    setContacts();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Введите имя
          <input
            onChange={handleAddContacts}
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </label>
      </form>
      <ContactsList contacts={contacts} />
    </>
  );
};

export default ContactForm;

//   const [contacts, setContacts] = useState([]);

//   const handleAddContact = () => {
//     setContacts(prev => [...prev, newContact]);
//   };
