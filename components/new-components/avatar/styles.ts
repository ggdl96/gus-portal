import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.contrastPrimary[30],
  },
  noImageDisplay: {
    paddingLeft: 3,
    backgroundColor: colors.contrastPrimary[10],
  },
});

export default styles;
