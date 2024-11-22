import { store } from '@/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface Props {
  children: ReactNode;
}

const ReduxProviderTestWrapper = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProviderTestWrapper;
