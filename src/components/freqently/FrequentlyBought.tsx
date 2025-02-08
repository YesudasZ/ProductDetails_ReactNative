import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import {FrequentlyBoughtItem} from '../../types/product'

interface FrequentlyBoughtProps {
  items: FrequentlyBoughtItem[];
  onItemPress: (item: FrequentlyBoughtItem) => void;
  onSeeMorePress?: () => void;
}

export const FrequentlyBought: React.FC<FrequentlyBoughtProps> = ({
  items,
  onItemPress,
  onSeeMorePress,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const itemWidth = 160;
  const screenWidth = Dimensions.get('window').width;

  const onScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => {
    return (
      <View style={styles.paginationContainer}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#006D5B' : '#E5E5E5',
                width: index === activeIndex ? 24 : 8,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const renderItem = ({ item }: { item: FrequentlyBoughtItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onItemPress(item)}
    >
      <Image source={{ uri: item.images.primary }} style={styles.image} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.originalPrice}>${item.originalPrice.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={12} color="#FFB800" />
          <Text style={styles.rating}>{item.rating.score}</Text>
          <Text style={styles.reviewCount}>({item.rating.totalReviews})</Text>
        </View>
      </View>
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Frequently bought</Text>
        <TouchableOpacity onPress={onSeeMorePress}>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        snapToInterval={itemWidth + 12}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {renderDotIndicator()}
    </View>
  );
};





