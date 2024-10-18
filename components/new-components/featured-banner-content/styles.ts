import borders from '@/styles/borders';
import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    borderRadius: borders.radius.medium,
  },
  titleWithAvatar: { justifyContent: 'center' },
  title: {
    fontFamily: fonts.fontFamilies.spectral.Medium,
    textAlign: 'center',
    color: '#f7f6f2',
    textTransform: 'uppercase',
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});

export default styles;
