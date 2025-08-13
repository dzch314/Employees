import { configureStore, type ReducersMapObject, type Reducer } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './reducerManager';
import type { StateSchema, CombinedState } from './StateSchema';

export const createReduxStore = (
  initialState: StateSchema,
  asyncReducers: ReducersMapObject<StateSchema>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument: {} },
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
