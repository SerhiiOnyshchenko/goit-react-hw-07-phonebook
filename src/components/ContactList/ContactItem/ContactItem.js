import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import sBtn from '../../../App.module.css';
import { useDeleteContactMutation } from 'Redux/contacts/contactsApi';

export default function ContactItem({ id, name, number }) {
   const [deleteContact, { isLoading: isDeleting }] =
      useDeleteContactMutation();
   return (
      <li className={s.item} id={id}>
         {name}: {number}
         <div className={sBtn.btn + ' ' + s.btn}>
            <button type="button" onClick={() => deleteContact(id)}>
               {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
         </div>
      </li>
   );
}
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
};
