import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProductInfoProps } from "../../types/product";
import styles from "./styles";

const DiscountBadge: React.FC<{ discount: string }> = ({ discount }) => (
  <View style={styles.discountBadgeContainer}>
    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>{discount}</Text>
    </View>
  </View>
);

export const ProductInfo: React.FC<ProductInfoProps> = ({
  price,
  rating,
  description,
}) => {
  const [showShareSuccess, setShowShareSuccess] = useState(false);

  const handleShare = () => {
    setShowShareSuccess(true);
    setTimeout(() => {
      setShowShareSuccess(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>EKERÖ</Text>
        <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
          <Ionicons name="share-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      {showShareSuccess && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>
            EKERÖ product has been shared successfully!
          </Text>
        </View>
      )}

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price.current.toFixed(2)}</Text>
        {price.original > price.current && (
          <>
            <Text style={styles.originalPrice}>
              ${price.original.toFixed(2)}
            </Text>
            <DiscountBadge discount={price.discount} />
          </>
        )}
      </View>
      
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFB800" />
        <Text style={styles.rating}>{rating.score.toFixed(1)}</Text>
        <Text style={styles.reviewCount}>({rating.totalReviews})</Text>
      </View>
      
      <Text style={styles.description}>{description.short}</Text>
    </View>
  );
};
