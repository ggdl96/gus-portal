import borders from '@/styles/borders';
import colors from '@/styles/colors';
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
    padding: 10,
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: colors.secondary[650],
    borderRadius: borders.radius.small,
  },
  gradient: { flex: 1 },
  categories: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    height: 14,
    textTransform: 'uppercase',
    color: colors.contrastSecondary[950],
    width: '100%',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.contrastSecondary[950],
  },
});

export default styles;
