import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
import contactReduser from './contacts/contact-reduser';

const store = configureStore({
   reducer: {
      filter: contactReduser,
      [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export default store;
