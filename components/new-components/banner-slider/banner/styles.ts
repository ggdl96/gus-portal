import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  symbolPrice: {
    textAlign: 'right',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  premiumContentBlock: { opacity: 0.8, width: '100%' },
  buttonText: { textTransform: 'uppercase' },
  buttonTextOwned: { textAlign: 'center' },
  buttonTextNotOwned: { textAlign: 'left' },
  titleWithAvatar: { justifyContent: 'center' },
  symbolStyles: {
    width: 12,
    height: 12,
    scale: 0.9,
  },
});

export default styles;
