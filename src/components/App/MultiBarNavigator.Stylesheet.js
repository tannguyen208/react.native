import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  toggleButton: {
    top: 15,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#566280'
  },
  toggleIcon: {
    fontSize: 30,
    color: '#ffffff'
  },
  actionsWrapper: {
    position: 'absolute',
    bottom: 0
  },
  actionContainer: {
    position: 'absolute',
  },
  actionContent: {
    flex: 1,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
