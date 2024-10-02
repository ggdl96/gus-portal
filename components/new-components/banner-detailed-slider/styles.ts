import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  itemWrapper: { flex: 1 },
  itemWrapperHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 2,
  },
});
