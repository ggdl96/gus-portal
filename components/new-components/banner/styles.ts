import borders from '@/styles/borders';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bannerWrapper: {
    borderRadius: borders.radius.medium,
  },
  bannerWrapperInside: {
    width: '100%',
    height: '100%',
    borderRadius: borders.radius.medium,
    backgroundColor: 'gray',
  },
  titleWithAvatar: { justifyContent: 'center' },
});

export default styles;
