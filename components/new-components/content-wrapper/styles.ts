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
});

export default styles;
