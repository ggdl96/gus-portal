import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { paddingVertical: 4, width: '100%' },
  containerInner: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  containerChildren: {
    width: '100%',
    paddingVertical: 4,
  },
  seeAll: {
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 14,
    textTransform: 'uppercase',
    lineHeight: 20,
    color: colors.contrastSecondary[950],
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.contrastSecondary[950],
  },
});

export default styles;
