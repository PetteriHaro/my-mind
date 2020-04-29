import React from 'react';

import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Category, CatId } from '../types';
import Thumbnail from './Thumbnail';
import Button from './Button';
import colors from '../styles/colors';

interface Props {
  categories: Category[];
  emptyListText: string;
  onEmptyActionPress?: () => void;
  onCategoryPres: (id: CatId) => void;
}

const EmptyList = ({ title, onActionPress }) => {
  return (
    <View style={styles.listEmpty}>
      <Text style={styles.listEmptyLabel}>{title}</Text>
      {onActionPress && (
        <Button onPress={onActionPress} style={styles.emptyActionButton}>
          Explore
        </Button>
      )}
    </View>
  );
};

const ThumbGrid: React.FC<Props> = ({
  categories,
  onCategoryPres,
  emptyListText,
  onEmptyActionPress,
}) => {
  return (
    <FlatList
      data={categories}
      numColumns={2}
      ListEmptyComponent={
        <EmptyList title={emptyListText} onActionPress={onEmptyActionPress} />
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Thumbnail
          onItemPress={() => onCategoryPres(item.id)}
          category={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listEmpty: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },
  listEmptyLabel: {
    color: colors.darkTextPrimary,
    fontSize: 20,
  },
  emptyActionButton: {
    width: '50%',
    marginTop: 10,
  },
});

export default ThumbGrid;
