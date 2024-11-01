import borders from '@/styles/borders';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.contrastPrimary[30],
    borderWidth: 2,
    borderRadius: borders.radius.medium,
    backgroundColor: colors.contrastPrimary[80],
  },
  containerHeader: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: '0%',
    transform: [{ translateY: -12 }],
  },
  containerHeaderTitle: {
    color: colors.contrastSecondary[900],
    fontFamily: fonts.fontFamilies.spectral.Light,
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: colors.contrastPrimary[80],
    borderTopLeftRadius: borders.radius.medium,
    borderTopRightRadius: borders.radius.medium,
  },
  line: {
    flex: 2,
  },
  connect: {
    flex: 1,
    paddingHorizontal: 4,
  },
});

export default styles;
