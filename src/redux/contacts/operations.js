import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { auth, db } from 'redux/firebaseConfig';

const contactsCollection = collection(db, 'contacts');

export const requestContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
   try {
     const user = auth.currentUser;
     if (!user) {
       return thunkApi.rejectWithValue('User not authenticated');
     }

     const snapshot = await getDocs(
       query(contactsCollection, where('userId', '==', user.uid)) 
     );
     return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
   } catch (error) {
     return thunkApi.rejectWithValue(error.message);
   }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        return thunkApi.rejectWithValue('User not authenticated');
      }

      const contactWithUserId = {
        ...contactData,
        userId: user.uid, 
      };

      const docRef = await addDoc(contactsCollection, contactWithUserId);
      return { id: docRef.id, ...contactWithUserId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        return thunkApi.rejectWithValue('User not authenticated');
      }

      const contactRef = doc(db, 'contacts', contactId);
      const contactSnapshot = await getDoc(contactRef);
      if (
        contactSnapshot.exists() &&
        contactSnapshot.data().userId === user.uid
      ) {
        await deleteDoc(contactRef);
        return contactId;
      } else {
        return thunkApi.rejectWithValue(
          'Contact not found or not owned by the user'
        );
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/editContact',
  async (contactData, thunkApi) => {
    try {
      const contactRef = doc(db, 'contacts', contactData.id);
      await updateDoc(contactRef, {
        name: contactData.name,
        number: contactData.number,
      });
      return contactData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
