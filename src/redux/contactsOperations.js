import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from './operations';

export const requestContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await $instance.post('/contacts', contactData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/editContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await $instance.patch(`/contacts/${contactData.id}`, {
        name: contactData.name,
        number: contactData.number,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
