import s from './Filter.module.css';
import { useState } from 'react';

export default function Filter() {
   const [filter, setFilter] = useState('');
   return (
      <label className={s.label}>
         Find contact by name
         <input
            type="text"
            name="filter"
            placeholder="Enter some letters to search"
            value={filter}
            onChange={e => setFilter(e.target.value)}
         />
      </label>
   );
}
