import { StateSchema } from '@/app/providers/StoreProvider';

export const getFilterEmployeesSearchText = (state: StateSchema) => state?.filterEmployees?.searchText ?? undefined;
