import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProductDescriptionProps } from "../../types/product";
import styles from "./styles";

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpanded}>
        <Text style={styles.title}>Product Description</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="#000"
        />
      </TouchableOpacity>
      {expanded && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

