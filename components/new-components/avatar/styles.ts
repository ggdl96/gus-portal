import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    backgroundColor: colors.contrastPrimary[30],
    borderWidth: 2,
    borderColor: colors.contrastPrimary[100],
  },
  noImageDisplay: {
    paddingLeft: 3,
    backgroundColor: colors.contrastPrimary[10],
  },
});

export default styles;
