import borders from '@/styles/borders';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B2BEB5',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: borders.radius.medium,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    borderRadius: borders.radius.medium,
  },
});

export default styles;
