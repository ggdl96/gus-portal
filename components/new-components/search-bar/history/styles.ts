import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: 0,
    padding: 15,
    borderBottomColor: colors.contrastPrimary[20],
    borderBottomWidth: 1,
  },
  containerText: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.contrastSecondary[900],
    fontFamily: fonts.fontFamilies.spectral.Regular,
  },
  containerDelete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: { width: 14, height: 14 },
});

export default styles;
