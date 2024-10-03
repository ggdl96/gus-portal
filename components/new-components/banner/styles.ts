import borders from '@/styles/borders';
import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bannerWrapper: {
    borderRadius: borders.radius.medium,
  },
  bannerWrapperInside: {
    width: '100%',
    height: '100%',
    borderRadius: borders.radius.medium,
  },
  titleWithAvatar: { justifyContent: 'center' },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: borders.radius.medium,
    backgroundColor: colors.contrastPrimary[20],
  },
});

export default styles;
