import { rtkApi } from '@/shared/api/rtkApi';

import { EmployeeWithStatus } from '../../model/types/employeeWithStatus';

const createEmployeeApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createEmployee: build.mutation<string, EmployeeWithStatus>({
      query: (employeeData) => ({
        url: '/users',
        method: 'POST',
        body: employeeData,
      }),
    }),
  }),
});

export const useCreateEmployee = createEmployeeApi.useCreateEmployeeMutation;
