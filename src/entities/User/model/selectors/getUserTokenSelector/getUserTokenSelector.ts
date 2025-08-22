import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserTokenSelector = (state: StateSchema) =>
  state?.user?.token ?? '';
