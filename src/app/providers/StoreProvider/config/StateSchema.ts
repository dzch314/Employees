import type {
  EnhancedStore,
  UnknownAction,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import type { EmployeesListSchema } from '@/widgets/EmployeesList';
import type { FilterEmployeesSchema } from '@/features/FilterEmployees';
import type { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

export type CombinedState<T> = { [K in keyof T]: T[K] | undefined };

export interface StateSchema {
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  filterEmployees: FilterEmployeesSchema;
  employeesList: EmployeesListSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: UnknownAction,
  ) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
