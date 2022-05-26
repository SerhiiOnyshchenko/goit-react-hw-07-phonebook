import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, error, isFetching }) {
   return (
      <div>
         {error ? (
            <h2>{error.data}</h2>
         ) : contacts ? (
            <ul className={s.list}>
               {contacts.map(({ id, name, phone }) => (
                  <ContactItem
                     key={id}
                     id={id}
                     name={name}
                     number={phone}
                     isFetching={isFetching}
                  />
               ))}
            </ul>
         ) : (
            <h2>No contacts</h2>
         )}
      </div>
   );
}
