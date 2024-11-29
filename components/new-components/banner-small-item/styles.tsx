import borders from '@/styles/borders';
import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.contrastPrimary[30],
    borderRadius: borders.radius.medium,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: borders.radius.medium,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    borderRadius: borders.radius.medium,
  },
});

export default styles;
