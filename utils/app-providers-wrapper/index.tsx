import React, { ReactNode } from 'react';
import ReduxProviderTestWrapper from '../redux-provider-test-wrapper';
import SafeAreaProviderTestWrapper from '../safe-area-provider-test-wrapper';

interface Props {
  children: ReactNode;
}

const AppProvidersWrapper = ({ children }: Props) => (
  <ReduxProviderTestWrapper>
    <SafeAreaProviderTestWrapper>{children}</SafeAreaProviderTestWrapper>
  </ReduxProviderTestWrapper>
);

export default AppProvidersWrapper;
