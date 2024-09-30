import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  titleWithAvatar: { justifyContent: 'center' },
  title: {
    fontWeight: '400',
    textAlign: 'center',
    color: '#f7f6f2',
    textTransform: 'uppercase',
  },
});

export default styles;
