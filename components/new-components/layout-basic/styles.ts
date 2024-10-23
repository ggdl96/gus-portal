import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildren: {
    flex: 1,
    backgroundColor: colors.contrastPrimary[50],
  },
});

export default styles;
