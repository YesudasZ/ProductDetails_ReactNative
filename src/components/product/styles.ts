import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth:.2,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Manrope_400Regular',
    flex: 1,
    color: "#404040"
  },
  discountBadgeContainer: {
    marginLeft: 8,
  },
  discountBadge: {
    backgroundColor: '#e44a4a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  discountText: {
    color: '#fff',
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Manrope-Bold',
    color: '#404040',
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#404040',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    marginLeft: 4,
    color: '#404040',
    fontFamily: 'Manrope-Regular',
  },
  reviewCount: {
    marginLeft: 4,
    color: '#404040',
    fontFamily: 'Manrope-Regular',
  },
  iconButton: {
    padding: 8,
  },
  description: {
    marginTop: 18,
    fontSize: 15,
    fontFamily: 'Manrope_500Medium',
    lineHeight: 20,
    color: '#404040',
  },
  successMessage: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  successText: {
    color: '#fff',
    fontFamily: 'Manrope-Regular',
    textAlign: 'center',
  },
});

export default styles