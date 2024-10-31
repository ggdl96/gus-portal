import borders from '@/styles/borders';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  containerImage: {
    backgroundColor: '#333',
    borderRadius: borders.radius.medium,
    width: '100%',
    display: 'flex',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  containerText: { flex: 1 },
  title: {
    color: colors.contrastSecondary[950],
    fontSize: 16,
    textTransform: 'capitalize',
    width: '100%',
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    paddingLeft: 8,
  },
  detail: {
    color: '#989898',
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: fonts.fontFamilies.spectral.Medium,
  },
  textSellerName: {
    color: '#989898',
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: fonts.fontFamilies.spectral.Medium,
  },
  containerSeller: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  seller: { paddingVertical: 0 },
});

export default styles;
