import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_TOKEN } from '@/shared/const/localstorage';

import type { UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);
      if (token) {
        state.token = token;
      }
    },
    logout: (state) => {
      state.token = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_TOKEN);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
