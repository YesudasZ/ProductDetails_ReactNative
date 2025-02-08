import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // margin:16,
    // padding: 16,
    backgroundColor: "#ffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,
    padding:10
  },
  title: {
    fontSize: 24,
    fontFamily: "Manrope-Bold",
    color: "#333",
  },
  seeMore: {
    color: "#006D5B",
    fontFamily: "Manrope-Bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  list: {
    gap: 18,
    margin:16,
    // marginLeft:16
  },
  itemContainer: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    padding:5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  discountBadge: {
    position: "absolute",
    bottom:120,
    left: 12,
    backgroundColor: "#e44a4a",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Manrope-Bold",
  },
  itemInfo: {
    padding: 12,
    backgroundColor: "#fff",
  },
  itemName: {
    fontSize: 14,
    fontFamily: "Manrope-SemiBold",
    marginBottom: 4,
    color: "#666",
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: "Manrope-Bold",
    marginBottom: 2,
  },
  originalPrice: {
    fontSize: 14,
    fontFamily: "Manrope-Regular",
    color: "#666",
    textDecorationLine: "line-through",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingBottom:5
  },
  rating: {
    fontSize: 12,
    fontFamily: "Manrope-SemiBold",
    color: "#333",
    paddingBottom:5
  
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Manrope-Regular",
    paddingBottom:5
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    // gap: 6,
    // borderRadius:5,
    marginBottom:50,
  },
  dot: {
    height:5,
    // borderRadius: 4,
    backgroundColor: '#E5E5E5',
    // borderTopRightRadius: 2,
    // borderBottomLeftRadius: 2,
  },
});

export default styles
