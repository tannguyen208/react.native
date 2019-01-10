import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    minHeight: 200
  },
  fakeBackground: {
    position: 'absolute',
    width: '100%'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  tabStyle: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
