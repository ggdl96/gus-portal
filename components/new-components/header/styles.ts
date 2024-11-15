import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.contrastPrimary[20],
  },
  headerTitleStyle: {
    color: colors.contrastSecondary[950],
    fontFamily: fonts.fontFamilies.spectral.Light,
  },
});

export default styles;
