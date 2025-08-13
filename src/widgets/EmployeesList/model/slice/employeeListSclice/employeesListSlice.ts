import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { EmployeeWithStatus } from '@/features/CreateEmployee';

import { EmployeesListSchema } from '../../types/employeesListSchema';

const initialState: EmployeesListSchema = {
  employees: [],
};

export const employeesListSlice = createSlice({
  name: 'employeesList',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<EmployeeWithStatus[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { actions: employeesListActions, reducer: employeesListReducer } = employeesListSlice;
