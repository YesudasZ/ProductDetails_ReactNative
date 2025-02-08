import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      top: 90,
      zIndex: 10,
    },
    tagContainer: {
      backgroundColor: '#E04949',
      paddingHorizontal: 8,
      paddingVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
      width: 70,
    },
    text: {
      color: 'white',
      fontSize: 10,
      fontWeight: '500',
      letterSpacing: 0.5,
    },
    cutTriangle: {
      position: 'absolute',
      right: -10,
      top: 0,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 10,
      borderLeftWidth: 0,
      borderTopWidth: 10,
      borderBottomWidth: 11.7,
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      borderTopColor: '#E65555',
      borderBottomColor: '#E14949',
    },
  });

  export default styles