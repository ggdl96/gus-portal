import React from 'react';
import { View } from 'react-native';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import LayoutSafeArea from '../layout-safe-area';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const LayoutBasicNoScroll = ({ children }: Props) => {
  const spacing = useSpacing();

  return (
    <LayoutSafeArea>
      <View style={[styles.container, { padding: spacing.defaultHorizontalSpacing }]}>
        {children}
      </View>
    </LayoutSafeArea>
  );
};

export default LayoutBasicNoScroll;
