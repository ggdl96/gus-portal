import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import borders from '@/styles/borders';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.contrastPrimary[20],
  },
  container: {
    height: '100%',
    width: '100%',
  },
  row1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  row1Line1: {
    height: '20%',
    width: '50%',
    borderRadius: borders.radius.small,
    paddingVertical: borders.sizes.high,
  },
  row1Line2: {
    height: '15%',
    width: '70%',
    paddingVertical: borders.sizes.high,
  },
  line: {
    backgroundColor: colors.contrastPrimary[80],
    borderRadius: borders.radius.small,
    flex: 1,
  },
});

export default styles;
