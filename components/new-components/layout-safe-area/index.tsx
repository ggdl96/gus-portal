import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '@/styles/colors';
import '../../../global.css';

interface Props {
  children: React.ReactNode;
}

const LayoutSafeArea = ({ children }: Props) => {
  return <View style={styles.safeArea}>{children}</View>;
};

export default LayoutSafeArea;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.contrastPrimary[10],
    flex: 1,
    alignItems: 'center',
  },
});
