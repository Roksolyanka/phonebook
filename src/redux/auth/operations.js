import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { app } from 'redux/firebaseConfig';

const auth = getAuth(app);

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { email, password, name } = userData;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        token: userCredential.user.accessToken,
        name: userCredential.user.displayName,
      };

      return { user };
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { email, password } = userData;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        token: userCredential.user.accessToken,
        name: userCredential.user.displayName,
      };
      return { user };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
          if (user) {
            resolve({
              user: {
                uid: user.uid,
                email: user.email,
                token: user.accessToken,
                name: user.displayName,
              },
            });
          } else {
            reject('User not authenticated');
          }
        });
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
