import React from 'react';
import { StyleSheet, View } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import colors from '@/styles/colors';
import '../../../global.css';

interface Props {
  children: React.ReactNode;
}

const LayoutSafeArea = ({ children }: Props) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <View style={styles.safeArea}>{children}</View>
    </SafeAreaProvider>
  );
};

export default LayoutSafeArea;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.contrastPrimary[10],
    flex: 1,
    alignItems: 'center',
  },
});
