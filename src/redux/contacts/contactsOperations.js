import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { ...contact });
      toast.success(`${contact.name} has been added to your contacts`);
      return res.data;
    } catch ({ message }) {
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      toast.success(`${name} has been deleted from your contacts`);
      return res.data;
    } catch ({ message }) {
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success(`${name} has been updated`);
      return res.data;
    } catch ({ message }) {
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
