import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SAFE_ARE_INITIAL_METRICS } from '@/constants/safe-area';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SafeAreaProviderTestWrapper = ({ children }: Props) => (
  <SafeAreaProvider initialMetrics={SAFE_ARE_INITIAL_METRICS}>{children}</SafeAreaProvider>
);

export default SafeAreaProviderTestWrapper;
