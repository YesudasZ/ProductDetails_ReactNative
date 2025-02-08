import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: { 
      padding: 16, 
      backgroundColor: '#fff', 
    }, 
    header: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
    }, 
    title: { 
      fontSize: 16, 
      fontFamily: 'Manrope-SemiBold', 
    }, 
    content: { 
      marginTop: 16, 
    }, 
    dimensions: { 
      gap: 8, 
    }, 
    dimension: { 
      gap: 8,
    }, 
    dimensionTextContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      paddingBottom: 8,
    },
    dimensionLabel: { 
      fontFamily: 'Manrope-Regular', 
    }, 
    dimensionValue: { 
      fontFamily: 'Manrope-Medium', 
    }, 
    underline: {
      height: 1,
      backgroundColor: '#E0E0E0',
      width: '100%',
    },
    diagram: { 
      width: '100%', 
      height: 400, 
      marginTop: 16, 
    }, 
  });

  export default styles