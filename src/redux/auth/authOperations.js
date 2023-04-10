import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    const toastId = toast.loading('Request in processing');

    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      toast.update(toastId, {
        render: 'Registration was successful',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });

      return data;
    } catch (err) {
      const errorMessage = err.response.data.message;
      toast.update(toastId, {
        render: errorMessage,
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    const toastId = toast.loading('Request in processing');

    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      toast.update(toastId, {
        render: 'Welcome back!',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });

      return data;
    } catch {
      toast.update(toastId, {
        render: 'Incorrect credentials',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  const toastId = toast.loading('Request in processing');

  try {
    const { data } = await axios.post('/users/logout');
    token.clear();
    toast.update(toastId, {
      render: 'See you next time',
      type: 'success',
      isLoading: false,
      autoClose: 4000,
    });

    return data;
  } catch (err) {
    toast.update(toastId, {
      render: err.message,
      type: 'error',
      isLoading: false,
      autoClose: 4000,
    });

    return thunkAPI.rejectWithValue();
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
