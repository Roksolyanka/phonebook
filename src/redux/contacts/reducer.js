import { createSlice } from '@reduxjs/toolkit';

import {
  addContactsThunk,
  deleteContactsThunk,
  editContactThunk,
  requestContactsThunk,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   ---------------------------ADD NEW CONTACT--------------------------------

      .addCase(addContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   ---------------------------DELETE CONTACT--------------------------------

      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //---------------------------EDIT CONTACT--------------------------------

      .addCase(editContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedContact = action.payload;
        state.contacts = state.contacts.map(contact =>
          contact.id === updatedContact.id ? updatedContact : contact
        );
      })
      .addCase(editContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
