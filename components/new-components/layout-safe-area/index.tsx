import React from 'react';
import { View } from 'react-native';
import '../../../global.css';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const LayoutSafeArea = ({ children }: Props) => {
  return <View style={styles.safeArea}>{children}</View>;
};

export default LayoutSafeArea;
