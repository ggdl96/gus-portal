import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    backgroundColor: 'blue',
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#f7f6f2',
    paddingLeft: 3,
  },
  noImageDisplay: {
    paddingLeft: 3,
  },
});

export default styles;
