import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavProps, Article, Category, CatId } from '../types';
import { StackList } from '../App';
import articles from '../data/articles';
import colors from '../styles/colors';
import Button from '../components/Button';
import ArticleInfo from '../components/ArticleInfo';
import { humanizeFollowers } from '../utils/followers';

interface Props {
  navigation: StackNavProps;
  route: RouteProp<StackList, 'List'>;
  savedCategories: Category[];
  saveFetchLoading: boolean;
  onFollowPress: (id: CatId) => void;
  onUnfollowPress: (id: CatId) => void;
}

interface State {
  articles: Article[];
}

class List extends React.Component<Props, State> {
  state: State = {
    articles: articles.filter(
      (item) => item.category === this.props.route.params.category.id,
    ),
  };

  onItemPress = (article: Article) => {
    this.props.navigation.navigate('Detail', {
      article,
      title: this.props.route.params.category.title,
    });
  };

  renderListItem = ({ item }: ListRenderItemInfo<Article>) => {
    return (
      <TouchableOpacity
        onPress={() => this.onItemPress(item)}
        style={styles.listItem}>
        <Text style={styles.listItemTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <ArticleInfo article={item} />
      </TouchableOpacity>
    );
  };

  renderHeader = (cat: Category) => {
    const isSaved = this.props.savedCategories.some(
      (item) => item.id === cat.id,
    );
    return (
      <View>
        <Image source={cat.image} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>{cat.title}</Text>
          <Button
            loading={this.props.saveFetchLoading}
            onPress={
              isSaved
                ? () => this.props.onUnfollowPress(cat.id)
                : () => this.props.onFollowPress(cat.id)
            }
            variant={isSaved ? 'default' : 'primary'}
            style={styles.headerButton}>
            {isSaved ? 'Following' : 'Follow'}
          </Button>
          <Text style={styles.followerLabel}>{`${humanizeFollowers(
            cat.followers,
          )} Followers`}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { category } = this.props.route.params;
    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={this.state.articles}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={this.renderHeader(category)}
        renderItem={this.renderListItem}
      />
    );
  }
}

export const listHeaderHeight = 240;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: listHeaderHeight,
  },
  headerTextContainer: {
    height: listHeaderHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.background00,
  },
  headerButton: {
    width: '40%',
    minWidth: 150,
  },
  followerLabel: {
    color: colors.background00,
    fontSize: 16,
  },
  listItem: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 7,
    marginVertical: 10,
  },
  listItemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.darkTextPrimary,
  },
});

export default List;
