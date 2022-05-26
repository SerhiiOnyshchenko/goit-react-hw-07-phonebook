import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, error, isLoading }) {
   return (
      <div>
         {error ? (
            <h2>{error.data}</h2>
         ) : isLoading ? (
            <h2>Loadong...</h2>
         ) : contacts?.length ? (
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

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         phone: PropTypes.string.isRequired,
      })
   ),
   error: PropTypes.object,
   isLoading: PropTypes.bool.isRequired,
};
