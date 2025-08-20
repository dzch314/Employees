import { useMemo, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';
import type { StateSchema, DeepPartial } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = useMemo(() => createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
  ), [initialState, asyncReducers]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
