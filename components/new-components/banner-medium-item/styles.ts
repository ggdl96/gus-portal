import borders from '@/styles/borders';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: borders.radius.small,
  },
  body: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: colors.secondary[650],
    borderRadius: borders.radius.small,
    padding: 12,
  },
  gradient: { flex: 1 },
  categories: {
    fontStyle: 'normal',
    fontFamily: fonts.fontFamilies.spectral.Medium,
    fontSize: 12,
    textAlign: 'center',
    height: 14,
    textTransform: 'uppercase',
    color: colors.contrastSecondary[950],
    width: '100%',
  },
});

export default styles;
