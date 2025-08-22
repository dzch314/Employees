import { combineReducers, type Reducer, type ReducersMapObject, type UnknownAction } from '@reduxjs/toolkit';

import type { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (key && !reducers[key]) {
        reducers[key] = reducer;
        combinedReducer = combineReducers(reducers);
      }
    },
    remove: (key: StateSchemaKey) => {
      if (key && reducers[key]) {
        delete reducers[key];
        keysToRemove.push(key);
        combinedReducer = combineReducers(reducers);
      }
    },
  };
};
