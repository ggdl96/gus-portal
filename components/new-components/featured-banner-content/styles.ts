import borders from '@/styles/borders';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    borderRadius: borders.radius.medium,
  },
  titleWithAvatar: { justifyContent: 'center' },
  title: {
    fontWeight: '400',
    textAlign: 'center',
    color: '#f7f6f2',
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: borders.radius.medium,
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
});

export default styles;
