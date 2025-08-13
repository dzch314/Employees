import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';
import type { StateSchema, DeepPartial } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
