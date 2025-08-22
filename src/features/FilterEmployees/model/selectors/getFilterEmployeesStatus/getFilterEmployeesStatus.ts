import { StateSchema } from '@/app/providers/StoreProvider';

export const getFilterEmployeesStatus = (state: StateSchema) =>
  state?.filterEmployees?.filter ?? undefined;
