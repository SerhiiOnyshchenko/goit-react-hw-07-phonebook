import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';

const store = configureStore({
   reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export default store;
