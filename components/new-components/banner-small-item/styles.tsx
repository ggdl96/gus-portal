import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#B2BEB5',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    width: '100%',
  },
  views: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#ffffff',
    width: ' 100%',
  },
  containerViews: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingBottom: 6,
  },
  containerTitle: {
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 2,
    display: 'flex',
  },
  sectionBottom: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 5,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
