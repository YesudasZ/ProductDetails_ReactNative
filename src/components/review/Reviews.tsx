import type React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, Dimensions, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { ReviewsProps,Review } from "../../types/product"
import styles from "./styles"

export const Reviews: React.FC<ReviewsProps> = ({ rating, summery, reviews }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [reviewContent, setReviewContent] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const windowWidth = Dimensions.get("window").width

  const resetForm = () => {
    setSelectedRating(0)
    setName("")
    setEmail("")
    setReviewContent("")
    setShowSuccess(false)
  }

  const handleSubmit = () => {
    if (selectedRating === 0) {
      Alert.alert("Error", "Please select a rating")
      return
    }
    if (!name.trim() || !email.trim() || !reviewContent.trim()) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }
    
    setShowSuccess(true)
    setTimeout(() => {
      setIsModalVisible(false)
      resetForm()
    }, 2000)
  }

  const getDistributionWidth = (count: number) => {
    const maxCount = 5
    return (count / maxCount) * (windowWidth * 0.4)
  }

  const renderDistributionBar = (starCount: number) => {
    const count = summery.distribution[starCount]
    return (
      <View style={styles.distributionRow} key={starCount}>
        <View style={styles.starCountContainer}>
          <Text style={styles.distributionText}>{starCount}</Text>
          <Ionicons name="star" size={16} color="#006D5B" />
        </View>
        <View style={styles.distributionBarContainer}>
          <View style={styles.distributionBarBackground}>
            <View style={[styles.distributionBarFill, { width: getDistributionWidth(starCount) }]} />
          </View>
        </View>
      </View>
    )
  }

  const renderReview = ({ item }: { item: Review }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.author.name.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.reviewContent}>
          <Text style={styles.reviewAuthor}>{item.author.name}</Text>
          <Text style={styles.reviewText}>{item.content}</Text>
        </View>
        <View style={styles.reviewStars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons key={star} name={star <= item.rating ? "star" : "star-outline"} size={16} color="#FFB800" />
          ))}
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Reviews</Text>
        <TouchableOpacity style={styles.addReviewButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addReviewText}>+ Add Review</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ratingOverview}>
        <View style={styles.leftContent}>
          <View style={styles.ratingMain}>
            <Text style={styles.ratingNumber}>{rating.score}</Text>
            <Ionicons name="star" size={40} color="#006D5B" style={styles.ratingStar} />
          </View>
          <View style={styles.reviewCountContainer}>
            <Text style={styles.reviewCountText}>{rating.totalReviews} reviews</Text>
          </View>
        </View>
        <View style={[styles.distributionContainer, { flex: 1, marginLeft: 20 }]}>
          {[5, 4, 3, 2, 1].map((star) => renderDistributionBar(star))}
        </View>
      </View>

      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.reviewsList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false)
          resetForm()
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {showSuccess ? (
              <View style={styles.successContainer}>
                <Ionicons name="checkmark-circle" size={48} color="#006D5B" />
                <Text style={styles.successText}>Review submitted successfully!</Text>
              </View>
            ) : (
              <>
                <Text style={styles.modalTitle}>Add Review</Text>
                <View style={styles.ratingInput}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity 
                      key={star} 
                      onPress={() => setSelectedRating(star)}
                      style={styles.starButton}
                    >
                      <Ionicons 
                        name={star <= selectedRating ? "star" : "star-outline"} 
                        size={24} 
                        color="#006D5B" 
                      />
                    </TouchableOpacity>
                  ))}
                </View>
                <TextInput 
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Your name"
                  placeholderTextColor="#666666"
                />
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Your email"
                  placeholderTextColor="#666666"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={[styles.input, styles.reviewInput]}
                  value={reviewContent}
                  onChangeText={setReviewContent}
                  placeholder="Write your review"
                  placeholderTextColor="#666666"
                  multiline
                  numberOfLines={4}
                />
                <TouchableOpacity 
                  style={styles.submitButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.modalCloseButton}
                  onPress={() => {
                    setIsModalVisible(false)
                    resetForm()
                  }}
                >
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}