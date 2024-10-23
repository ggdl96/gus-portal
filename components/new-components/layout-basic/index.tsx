import React from 'react';
import { ScrollView, View } from 'react-native';
import '../../../global.css';
import useSpacing from '@/hooks/useSpacing';
import LayoutSafeArea from '../layout-safe-area';
import styles from './styles';
import Footer from '@/components/new-components/footer';

interface Props {
  children: React.ReactNode;
}

const LayoutBasic = ({ children }: Props) => {
  const spacing = useSpacing();

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
            },
          ]}>
          {children}
        </View>
        <Footer />
      </ScrollView>
    </LayoutSafeArea>
  );
};

export default LayoutBasic;
