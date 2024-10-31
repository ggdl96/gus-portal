import React from 'react';
import { Platform, View } from 'react-native';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import LayoutSafeArea from '../layout-safe-area';
import styles from './styles';
import Footer from '@/components/new-components/footer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

const LayoutBasicNoScroll = ({ children }: Props) => {
  const spacing = useSpacing();
  const sharedStyles = 'w-full lg:w-3/4 flex align-middle';
  const insets = useSafeAreaInsets();

  return (
    <LayoutSafeArea>
      <View
        className={`${sharedStyles}`}
        style={[styles.container, { padding: spacing.defaultHorizontalSpacing }]}>
        {children}
      </View>
      <View className="w-full flex align-middle">
        {Platform.OS === 'web' ? (
          <Footer style={{ paddingHorizontal: spacing.defaultHorizontalSpacing }} />
        ) : (
          <View className="w-full" style={{ height: insets.bottom }} />
        )}
      </View>
    </LayoutSafeArea>
  );
};

export default LayoutBasicNoScroll;
