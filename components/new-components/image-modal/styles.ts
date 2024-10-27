import { StyleSheet } from 'react-native';

import '../../../global.css';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

const styles = StyleSheet.create({
  modalTopContent: {
    zIndex: 1,
  },
  backArrow: {
    color: colors.contrastSecondary[900],
    lineHeight: 28,
  },
  text: {
    fontFamily: fonts.fontFamilies.spectral.Medium,
  },
  image: {
    backgroundColor: '#000000cc',
  },
});

export default styles;
