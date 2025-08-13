import type { EmployeeWithStatus } from '@/features/CreateEmployee';
import { rtkApi } from '@/shared/api/rtkApi';

const employeesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<EmployeeWithStatus[], null>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});

export const useLazyGetEmployees = employeesListApi.useLazyGetEmployeesQuery;
