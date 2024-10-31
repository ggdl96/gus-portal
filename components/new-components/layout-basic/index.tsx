import React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import LayoutSafeArea from '../layout-safe-area';
import styles from './styles';
import Footer from '@/components/new-components/footer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  applyVerticalPadding?: boolean;
}

const LayoutBasic = ({ children, applyVerticalPadding = false }: Props) => {
  const spacing = useSpacing();
  const insets = useSafeAreaInsets();

  return (
    <LayoutSafeArea>
      <ScrollView
        className="w-full"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <View
          className="w-full lg:w-3/4 flex align-middle"
          style={[
            styles.containerChildren,
            {
              paddingHorizontal: spacing.defaultHorizontalSpacing,
              paddingVertical: applyVerticalPadding ? spacing.defaultHorizontalSpacing : 0,
            },
          ]}>
          {children}
        </View>
        {Platform.OS === 'web' ? (
          <Footer />
        ) : (
          <View className="w-full" style={{ height: insets.bottom }} />
        )}
      </ScrollView>
    </LayoutSafeArea>
  );
};

export default LayoutBasic;
