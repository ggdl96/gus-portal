import borders from '@/styles/borders';
import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.contrastPrimary[20],
  },
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    width: '100%',
  },
  contentInside: {
    padding: '2%',
    backgroundColor: colors.contrastPrimary[30],
    flexDirection: 'row',
  },
  row2: {
    backgroundColor: colors.contrastPrimary[30],
    justifyContent: 'space-evenly',
    width: '80%',
    flexDirection: 'column',
  },
  row2Line1: {
    height: '20%',
    width: '50%',
    backgroundColor: colors.contrastPrimary[80],
    borderRadius: borders.radius.high,
  },
  row2Line2: {
    height: '20%',
    backgroundColor: colors.contrastPrimary[80],
    width: '100%',
    borderRadius: borders.radius.high,
  },
});

export default styles;
