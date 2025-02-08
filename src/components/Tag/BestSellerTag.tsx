import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const BestSellerTag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        <Text style={styles.text}>Best Seller</Text>
        <View style={styles.cutTriangle} />
      </View>
    </View>
  );
};

export default BestSellerTag;