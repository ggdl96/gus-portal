import React from 'react';
import { View } from 'react-native';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import LayoutSafeArea from '../layout-safe-area';
import styles from './styles';
import Footer from '@/components/new-components/footer';

interface Props {
  children: React.ReactNode;
}

const LayoutBasicNoScroll = ({ children }: Props) => {
  const spacing = useSpacing();
  const sharedStyles = 'w-full lg:w-3/4 flex align-middle';

  return (
    <LayoutSafeArea>
      <View
        className={`${sharedStyles}`}
        style={[styles.container, { paddingHorizontal: spacing.defaultHorizontalSpacing }]}>
        {children}
      </View>
      <View className={`${sharedStyles}`}>
        <Footer style={{ paddingHorizontal: spacing.defaultHorizontalSpacing }} />
      </View>
    </LayoutSafeArea>
  );
};

export default LayoutBasicNoScroll;
