import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const contactsInitialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

    [editContact.pending]: handlePending,
    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1, payload);
    },
    [editContact.rejected]: handleRejected,
  },
});

export { contactsSlice };
