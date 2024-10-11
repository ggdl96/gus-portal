import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    padding: 10,
  },
  title: {
    fontFamily: fonts.fontFamilies.spectral.Medium,
    textAlign: 'center',
    color: '#f7f6f2',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: fonts.fontFamilies.spectral.Medium,
    textAlign: 'center',
    color: '#f7f6f2',
    textTransform: 'uppercase',
  },
});

export default styles;
