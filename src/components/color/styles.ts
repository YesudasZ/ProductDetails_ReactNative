import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth:.4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Manrope-SemiBold',
    marginBottom: 12,
    color: '#404040',
  },
  colorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    borderWidth:1,
    borderColor: '#E5E5E5',
    minWidth: '45%',
  },
  selectedColor: {
    borderColor: '#006D5B',
    borderWidth: 1,
  },
  colorSquare: {
    width: 32,
    height: 32,
    borderRadius: 6,
    marginRight: 8,
  },
  colorName: {
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
    color: '#404040',
  },
});

export default styles