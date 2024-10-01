import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

export const styleSkeletonSlider = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -SCREEN_HEIGHT * 0.01,
    paddingBottom: SCREEN_HEIGHT * 0.072,
  },
});
