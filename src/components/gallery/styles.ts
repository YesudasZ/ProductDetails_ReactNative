import { StyleSheet , Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      height: width,
      backgroundColor:"#fdfdfd"
    },
    image: {
      width,
      height: width,
      resizeMode: 'cover',
    },
    thumbnailContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 8,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // backgroundColor: 'rgba(255,255,255,0.8)',
    },
    thumbnail: {
      width: 48,
      height: 48,
      borderRadius: 4,
      marginHorizontal: 4,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      borderRadius: 4,
    },
    activeThumbnail: {
      borderColor: '#006D5B',
    },
  });
  export default styles