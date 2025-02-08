import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Manrope-Bold",
    color: "#1A1A1A",
  },
  addReviewButton: {
    paddingVertical: 8,
  },
  addReviewText: {
    color: "#006D5B",
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  ratingOverview: {
    marginBottom: 32,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingMain: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingNumber: {
    fontSize: 48,
    fontFamily: "Manrope-Bold",
    color: "#1A1A1A",
    marginRight: 8,
  },
  ratingStar: {
    marginTop: 4,
  },
  reviewCountContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 24,
  },
  reviewCountText: {
    color: "#FFFFFF",
    fontFamily: "Manrope-Medium",
    fontSize: 14,
  },
  distributionContainer: {
    gap: 8,
  },
  distributionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  starCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 40,
    marginRight: 12,
  },
  distributionText: {
    fontFamily: "Manrope-Medium",
    fontSize: 16,
    color: "#666666",
    marginRight: 4,
  },
  distributionBarContainer: {
    flex: 1,
  },
  distributionBarBackground: {
    height: 8,
    borderRadius: 4,
  },
  distributionBarFill: {
    height: 8,
    backgroundColor: "#006D5B",
    borderRadius: 4,
  },
  reviewsList: {
    marginTop: 16,
  },
  reviewItem: {
    marginBottom: 24,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#006D5B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Manrope-SemiBold",
  },
  reviewContent: {
    flex: 1,
    marginRight: 16,
  },
  reviewAuthor: {
    fontSize: 18,
    fontFamily: "Manrope-SemiBold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  reviewStars: {
    flexDirection: "row",
    gap: 2,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: "Manrope-Regular",
    color: "#666666",
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Manrope-Bold",
    marginBottom: 16,
  },
  ratingInput: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontFamily: "Manrope-Regular",
  },
  reviewInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#006D5B",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
  },
  modalCloseButton: {
    alignSelf: "center",
  },
  modalCloseText: {
    color: "#666666",
    fontFamily: "Manrope-SemiBold",
  },
  leftContent: {
    flexDirection: "column",
  },starButton: {
    padding: 8,
  },
  successContainer: {
    alignItems: "center",
    padding: 20,
  },
  successText: {
    fontSize: 18,
    fontFamily: "Manrope-SemiBold",
    color: "#006D5B",
    marginTop: 16,
    textAlign: "center",
  }
})

export default styles