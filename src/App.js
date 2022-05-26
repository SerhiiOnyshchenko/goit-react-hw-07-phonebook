import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import s from 'App.module.css';
import { useFetchContactsQuery } from 'Redux/contacts/contactsApi';

export default function App() {
   const { data, error, isFetching } = useFetchContactsQuery();

   return (
      <div className={s.main}>
         <h1>Phonebook</h1>
         <ContactForm contacts={data} />
         <h2>Contacts</h2>
         <Filter />
         <ContactList contacts={data} error={error} isFetching={isFetching} />
      </div>
   );
}
