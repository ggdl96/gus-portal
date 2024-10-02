import borders from '@/styles/borders';
import colors from '@/styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.contrastPrimary[20],
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  content: { flex: 1, justifyContent: 'flex-end' },
  sectionContent: {
    backgroundColor: colors.contrastPrimary[80],
    borderRadius: borders.radius.high,
    flex: 1,
  },
  section1: {
    height: '20%',
    width: '50%',
    paddingVertical: 4,
  },
  section2: {
    height: '15%',
    width: '70%',
    paddingVertical: 4,
  },
});

export default styles;
