import { StyleSheet, Platform } from 'react-native';
import colors from '@/styles/colors';
import borders from '@/styles/borders';
import fonts from '@/styles/fonts';

const styles = StyleSheet.create({
  containerSearchIcon: {
    paddingLeft: 6,
  },
  wrapper: {
    height: Platform.OS === 'ios' ? 48 : 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancel: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
  },
  input: {
    fontSize: 16,
    width: '100%',
    color: colors.contrastPrimary[10],
    fontFamily: fonts.fontFamilies.spectral.Regular,
  },
  wrapperInput: { width: '100%' },
  sectionInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: borders.radius.medium,
    padding: borders.radius.high,
    backgroundColor: colors.contrastSecondary[900],
    flex: 1,
  },
});

export default styles;
