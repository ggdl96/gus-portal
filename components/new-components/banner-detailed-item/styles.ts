import borders from '@/styles/borders';
import colors from '@/styles/colors';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.contrastPrimary[20],
    justifyContent: 'flex-start',
  },
  containerImage: {
    backgroundColor: colors.contrastPrimary[20],
    borderTopRightRadius: borders.radius.medium,
    borderTopLeftRadius: borders.radius.medium,
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
  containerSeller: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  body: {
    display: 'flex',
    width: '100%',
    flex: 1,
  },
  seller: { paddingVertical: 0 },
});

export default styles;
