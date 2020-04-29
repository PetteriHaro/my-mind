import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Category } from '../types';
import colors from '../styles/colors';

interface Props {
  category: Category;
  onItemPress: () => void;
}

const Thumbnail: React.FC<Props> = ({ category, onItemPress }) => (
  <TouchableOpacity
    onPress={onItemPress}
    activeOpacity={0.7}
    style={styles.thumbnail}>
    <Image style={styles.image} resizeMode="cover" source={category.image} />
    <Text style={styles.title}>{category.label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  thumbnail: {
    flex: 1,
  },
  image: {
    height: 180,
    width: '100%',
  },
  title: {
    color: colors.background00,
    position: 'absolute',
    left: 10,
    fontSize: 12,
    bottom: 10,
  },
});

export default Thumbnail;
