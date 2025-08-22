import type { Status } from '@/entities/Status';
import { rtkApi } from '@/shared/api/rtkApi';

interface ChangeEmployeeStatusArg {
  employeeId: string;
  status: Status;
}

const changeEmployeeStatusApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    changeEmployeeStatus: build.mutation<Status, ChangeEmployeeStatusArg>({
      query: ({ employeeId, status }) => ({
        url: `/users/${employeeId}`,
        method: 'POST',
        body: { status },
      }),
    }),
  }),
});

export const useChangeEmployeeStatus = changeEmployeeStatusApi.useChangeEmployeeStatusMutation;
