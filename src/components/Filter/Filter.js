import s from './Filter.module.css';

export default function Filter({ filter, setFilter }) {
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
