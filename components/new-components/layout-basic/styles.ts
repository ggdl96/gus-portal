import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.contrastPrimary[50],
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildren: {
    flex: 1,
    width: '100%',
  },
});

export default styles;
