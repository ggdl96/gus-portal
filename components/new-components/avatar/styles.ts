import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.contrastPrimary[20],
    borderWidth: 2,
    borderColor: colors.contrastPrimary[100],
  },
  noImageDisplay: {
    backgroundColor: colors.contrastPrimary[20],
  },
});

export default styles;
