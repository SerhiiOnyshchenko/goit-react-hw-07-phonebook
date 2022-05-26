import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useFetchContactsQuery } from 'Redux/contacts/contactsApi';

export default function ContactList({ contacts, error, isFetching }) {
   // const { data, error, isFetching } = useFetchContactsQuery();
   return (
      <div>
         {error ? (
            <h2>{error.data}</h2>
         ) : isFetching ? (
            <h2>Loading...</h2>
         ) : contacts ? (
            <ul className={s.list}>
               {contacts.map(({ id, name, phone }) => (
                  <ContactItem key={id} id={id} name={name} number={phone} />
               ))}
            </ul>
         ) : (
            <h2>No contacts</h2>
         )}
      </div>
   );
}
