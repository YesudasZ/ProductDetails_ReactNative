import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: "#fff",
      borderBottomWidth: 0.3,
      borderColor: "e0e0e0",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 16,
      fontFamily: "Manrope-SemiBold",
    },
    description: {
      marginTop: 12,
      fontSize: 15,
      fontFamily: "Manrope_500Medium",
      lineHeight: 20,
      color: "#404040",
    },
  });

  export default styles