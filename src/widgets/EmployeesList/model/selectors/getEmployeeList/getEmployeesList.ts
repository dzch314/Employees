import { StateSchema } from '@/app/providers/StoreProvider';

export const getEmployeesList = (state: StateSchema) =>
  state?.employeesList?.employees ?? [];
