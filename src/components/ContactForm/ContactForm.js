import { useState } from 'react';
import s from './ContactForm.module.css';
import sBtn from '../../App.module.css';
import { useAddContactMutation } from 'Redux/contacts/contactsApi';

export default function ContactForm({ contacts }) {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [addContact, { isLoading }] = useAddContactMutation();

   const onSubmitForm = async e => {
      e.preventDefault();
      if (
         contacts.find(
            contact =>
               contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
         )
      ) {
         alert(name + ' is alredy in contacts');
         return;
      }
      await addContact({ name, phone });
      setName('');
      setPhone('');
   };

   return (
      <form className={s.form} onSubmit={onSubmitForm}>
         <label className={s.label}>
            Name
            <input
               onChange={e => setName(e.target.value)}
               type="text"
               name="name"
               value={name}
               placeholder="Name Lastname"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
            />
         </label>
         <label className={s.label}>
            Number
            <input
               onChange={e => setPhone(e.target.value)}
               type="tel"
               name="number"
               value={phone}
               placeholder="XXX-XX-XX"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
         </label>
         <div className={sBtn.btn + ' ' + s.btn}>
            <button type="submit" disabled={isLoading}>
               Add contact
            </button>
         </div>
      </form>
   );
}
