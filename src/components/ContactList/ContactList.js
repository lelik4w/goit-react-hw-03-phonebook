import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} <span>{number}</span>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
            title="Remove"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
