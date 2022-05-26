import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import sBtn from '../../../App.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../../Redux/contacts/contact-actions';
import { useDeleteContactMutation } from 'Redux/contacts/contactsApi';

export default function ContactItem({ id, name, number }) {
   // const dispatch = useDispatch();
   const [deleteContact] = useDeleteContactMutation();
   return (
      <li className={s.item} id={id}>
         {name}: {number}
         <div className={sBtn.btn + ' ' + s.btn}>
            <button type="button" onClick={() => deleteContact(id)}>
               Delete
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
