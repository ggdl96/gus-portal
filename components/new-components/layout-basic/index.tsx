import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import colors from '@/styles/colors';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';

interface Props {
  children: React.ReactNode;
}

const LayoutBasic = ({ children }: Props) => {
  const spacing = useSpacing();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollViewContainer,
            { padding: spacing.defaultHorizontalSpacing },
          ]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LayoutBasic;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.contrastPrimary[10],
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.contrastPrimary[10],
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
