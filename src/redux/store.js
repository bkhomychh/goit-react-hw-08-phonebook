import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsApi } from 'services/contactsApi';
import { filterSlice } from './filter';
import { authPersistedReducer } from './auth';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    filter: filterSlice.reducer,
    contacts: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
