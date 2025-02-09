import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Animated,
  View,
  ActivityIndicator,
  Modal,
  ScrollView
} from "react-native";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";
import { AddToCartButtonProps } from "../../types/product";

const WishlistIcon = ({ color }: { color: string }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={color}
      stroke="#006D5B"
      strokeWidth="1.5"
    />
  </Svg>
);

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onPress,
  onWishlistPress,
  isWishlisted = false,
}) => {
  const [animation] = useState(new Animated.Value(1));
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [wishlistAnimation] = useState(new Animated.Value(1));

  const handleAddToCart = async () => {
    if (isLoading) return;

    setIsLoading(true);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    try {
      await onPress();
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWishlistPress = () => {
    Animated.sequence([
      Animated.timing(wishlistAnimation, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(wishlistAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onWishlistPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Animated.View
          style={[
            styles.wishlistContainer,
            { transform: [{ scale: wishlistAnimation }] },
          ]}
        >
          <TouchableOpacity
            onPress={handleWishlistPress}
            style={styles.wishlistButton}
          >
            <WishlistIcon color={isWishlisted ? "#006D5B" : "transparent"} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.addToCartContainer,
            { transform: [{ scale: animation }] },
          ]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddToCart}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add to Cart</Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Modal transparent visible={showConfirmation} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Added to cart successfully!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
