import { StyleSheet, Platform } from 'react-native';
import colors from '@/styles/colors';
import borders from '@/styles/borders';

const styles = StyleSheet.create({
  image: {
    height: 16,
    width: 16,
    backgroundColor: 'red',
  },
  wrapper: {
    height: Platform.OS === 'ios' ? 48 : 60,
    width: '60%',
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
    width: '100%',
    backgroundColor: colors.contrastSecondary[900],
  },
});

export default styles;
