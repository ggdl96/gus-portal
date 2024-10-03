import borders from '@/styles/borders';
import colors from '@/styles/colors';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerImage: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: borders.radius.medium,
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: '500',
  },
  textOwnerName: {
    color: '#989898',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  containerOwner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 10,
  },
});

export default styles;
