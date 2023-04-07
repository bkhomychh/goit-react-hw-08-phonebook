import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'utils/constants';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.clear();

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;

    // check if JWT is persisted
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    // set JWT and fetch a current user
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
