import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    borderRadius: 5,
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
    borderRadius: 5,
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
});

export default styles;
