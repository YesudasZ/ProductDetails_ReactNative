import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, Image } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SizeInfoProps} from '../../types/product'; 
import styles from './styles';

export const SizeInfo: React.FC<SizeInfoProps> = ({ dimensions }) => { 
  const [expanded, setExpanded] = useState(false); 
  const imageUrl = encodeURI("https://lowmesiv.sirv.com/appmaker test/image 11.png"); 
 
  return ( 
    <View style={styles.container}> 
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setExpanded(!expanded)} 
      > 
        <Text style={styles.title}>Size</Text> 
        <Ionicons 
          name={expanded ? 'chevron-up' : 'chevron-down'} 
          size={24} 
          color="#000" 
        /> 
      </TouchableOpacity> 
      {expanded && dimensions && ( 
  <View style={styles.content}> 
    <View style={styles.dimensions}> 
      {dimensions.width && <SizeDimension label="Width" value={dimensions.width} showUnderline />} 
      {dimensions.depth && <SizeDimension label="Depth" value={dimensions.depth} showUnderline />} 
      {dimensions.height && <SizeDimension label="Height" value={dimensions.height} showUnderline />} 
      {dimensions.seatWidth && <SizeDimension label="Seat Width" value={dimensions.seatWidth} showUnderline />} 
      {dimensions.seatDepth && <SizeDimension label="Seat Depth" value={dimensions.seatDepth} showUnderline />} 
      {dimensions.seatHeight && <SizeDimension label="Seat Height" value={dimensions.seatHeight} />} 
    </View> 
    <Image source={{ uri: imageUrl }} style={styles.diagram} resizeMode="contain" /> 
  </View> 
)} 
 
    </View> 
  ); 
}; 
 
const SizeDimension: React.FC<{ label: string; value: number; showUnderline?: boolean }> = ({ 
  label, 
  value, 
  showUnderline = false 
}) => ( 
  <View style={styles.dimension}> 
    <View style={styles.dimensionTextContainer}>
      <Text style={styles.dimensionLabel}>{label}:</Text>
      <Text style={styles.dimensionValue}>{value}</Text>
    </View>
    {showUnderline && <View style={styles.underline} />}
  </View> 
); 
 