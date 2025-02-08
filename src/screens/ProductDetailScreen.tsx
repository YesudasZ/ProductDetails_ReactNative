import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ImageGallery } from "../components/gallery/ImageGallery";
import { ProductInfo } from "../components/product/ProductInfo";
import { ColorSelector } from "../components/color/ColorSelector";
import { ProductDescription } from "../components/description/ProductDescription";
import { SizeInfo } from "../components/size/SizeInfo";
import { Reviews } from "../components/review/Reviews";
import { FrequentlyBought } from "../components/freqently/FrequentlyBought";
import { AddToCartButton } from "../components/cart/AddToCartButton";
import { useProductData } from "../hooks/useProductData";
import { ProductVariant } from "../types/product";

export default function ProductDetailScreen() {
  const { product, loading, error } = useProductData();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  if (loading) {
    return null;
  }

  if (error || !product) {
    return null; 
  }

  const handleAddToCart = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
  };

  const handleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ImageGallery images={product.images.gallery} />
        <ProductInfo
          name={product.name}
          price={selectedVariant?.price || product.price}
          rating={product.rating}
          description={product.description}
        />
        <ColorSelector
          variants={product.variants}
          selectedVariant={selectedVariant || product.variants[0]}
          onSelectVariant={setSelectedVariant}
        />
        <ProductDescription description={product.description.long} />
        <SizeInfo dimensions={product.dimensions} />
        <Reviews
          rating={product.rating}
          summery={product.reviews.summary}
          reviews={product.reviews.items}
        />
        <FrequentlyBought
          items={product.frequentlyBoughtWith}
          onItemPress={() => {}}
        />
      </ScrollView>
      <AddToCartButton
        onPress={handleAddToCart}
        onWishlistPress={handleWishlist}
        isWishlisted={isWishlisted}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
