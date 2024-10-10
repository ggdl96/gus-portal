import { StyleSheet } from 'react-native';

import '../../../global.css';
import borders from '@/styles/borders';
import colors from '@/styles/colors';

const styles = StyleSheet.create({
  imageVariant: {
    borderRadius: borders.radius.small,
    borderWidth: 2,
    borderColor: colors.contrastPrimary[30],
  },
});

export default styles;
