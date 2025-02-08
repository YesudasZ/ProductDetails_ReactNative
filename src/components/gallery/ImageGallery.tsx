import React, { useState, useRef } from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import BestSellerTag from '../../components/Tag/BestSellerTag';
import {ImageGalleryProps} from '../../types/product'
import styles from './styles';

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const renderThumbnail = (uri: string, index: number) => (
    <TouchableOpacity
    key={index}
      onPress={() => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
      }}
      style={[
        styles.thumbnail,
        activeIndex === index && styles.activeThumbnail,
      ]}
    >
      <Image source={{ uri }} style={styles.thumbnailImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <BestSellerTag/>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.image} />
        )}
        keyExtractor={(item, index) => `${index}-${item.url}`}
      />
      <View style={styles.thumbnailContainer}>
        {images.map((image, index) => 
              <React.Fragment key={index}>{renderThumbnail(image.url, index)}</React.Fragment>
        )}
      </View>
    </View>
  );
};

