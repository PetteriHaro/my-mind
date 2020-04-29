import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import { InputIcon, ClockIcon } from '../assets/icons';
import { Article } from '../types';
import colors from '../styles/colors';
import categories from '../data/categories';

interface Props {
  article: Article;
  showCategory?: boolean;
}

const ArticleInfo: React.FC<Props> = ({ article, showCategory }) => {
  return (
    <View style={styles.listItemDetails}>
      <View style={styles.listItemDetailContainer}>
        <InputIcon color="#ccc" />
        <Text style={styles.listItemDetailLabel}>{article.author}</Text>
      </View>
      <View style={styles.listItemDetailContainer}>
        <ClockIcon color="#ccc" />
        <Text style={styles.listItemDetailLabel}>
          {moment(article.createdAt).format('ll')}
        </Text>
      </View>
      {showCategory && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>
            {categories.find((item) => item.id === article.category).label}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  listItemDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 20,
  },
  listItemDetailLabel: {
    color: colors.darkTextPrimary,
    marginLeft: 5,
    fontSize: 16,
  },
  categoryContainer: {
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    position: 'absolute',
    right: 10,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    fontSize: 14,
    color: colors.darkTextPrimary,
  },
});

export default ArticleInfo;
