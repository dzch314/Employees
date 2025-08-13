import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Status } from '@/entities/Status';

import { FilterEmployeesSchema } from '../../types/filterEmployeesSchema';

const initialState: FilterEmployeesSchema = {};

export const filterEmployeesSlice = createSlice({
  name: 'employeesFilter',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setFilter: (state, action: PayloadAction<Status>) => {
      state.filter = action.payload;
    },
  },
});

export const { actions: filterEmployeesActions, reducer: filterEmployeesReducer } = filterEmployeesSlice;
