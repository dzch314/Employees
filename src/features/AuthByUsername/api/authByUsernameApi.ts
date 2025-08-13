import { rtkApi } from '@/shared/api/rtkApi';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const authByUsernameApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    authByUsername: build.mutation<string, LoginByUsernameProps>({
      query: (authData) => ({
        url: '/login',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const useAuthByUsername = authByUsernameApi.useAuthByUsernameMutation;
