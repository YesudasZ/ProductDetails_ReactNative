import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ColorSelectorProps } from "../../types/product";
import styles from "./styles";

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  variants,
  selectedVariant,
  onSelectVariant,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colors</Text>
      <View style={styles.colorsContainer}>
        {variants.map((variant) => (
          <TouchableOpacity
            key={variant.colorCode}
            onPress={() => onSelectVariant(variant)}
            style={[
              styles.colorButton,
              selectedVariant.colorCode === variant.colorCode &&
                styles.selectedColor,
            ]}
          >
            <View
              style={[
                styles.colorSquare,
                { backgroundColor: variant.colorCode },
              ]}
            />
            <Text style={styles.colorName}>{variant.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
