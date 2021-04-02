import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts }) => (
  <p className={styles.contact}>{contacts}</p>
);

export default ContactsList;
