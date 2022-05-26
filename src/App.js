import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import s from 'App.module.css';
import { useFetchContactsQuery } from 'Redux/contacts/contactsApi';
import { useSelector } from 'react-redux';
import { getFilter } from 'Redux/contacts/contact-selectors';

export default function App() {
   const { data, error, isLoading } = useFetchContactsQuery();
   const filter = useSelector(getFilter);

   const getVisibleContacts =
      data &&
      data.filter(contact =>
         contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );

   return (
      <div className={s.main}>
         <h1>Phonebook</h1>
         <ContactForm contacts={data} />
         <h2>Contacts</h2>
         <Filter />
         <ContactList
            contacts={getVisibleContacts}
            error={error}
            isLoading={isLoading}
         />
      </div>
   );
}
