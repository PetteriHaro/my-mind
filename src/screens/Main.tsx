import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  TabView,
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import { Scene } from 'react-native-tab-view/lib/typescript/src/types';

import { Category, StackNavProps, CatId } from '../types';
import { screenWidth } from '../utils/platform';
import ThumbGrid from '../components/ThumbGrid';
import categories from '../data/categories';
import colors from '../styles/colors';

const popularCategories = categories.slice(1, 5); // "POPULAR" ;)

interface Props {
  saveFetchLoading: boolean;
  savedCategories: Category[];
  navigation: StackNavProps;
}

type NavState = NavigationState<{
  key: 'following' | 'popular' | 'explore';
  title: string;
}>;

interface State {
  popularCategories: Category[];
  exploreCategories: Category[];
  navState: NavigationState<{
    key: 'following' | 'popular' | 'explore';
    title: string;
  }>;
}

class Main extends React.Component<Props, State> {
  state: State = {
    popularCategories: popularCategories,
    exploreCategories: categories,
    navState: {
      index: 0,
      routes: [
        {
          key: 'following',
          title: 'Following',
        },
        {
          key: 'popular',
          title: 'Popular',
        },
        {
          key: 'explore',
          title: 'Explore',
        },
      ],
    },
  };

  onCategoryPress = (id: CatId) => {
    this.props.navigation.navigate('List', {
      category: categories.find((item) => item.id === id),
    });
  };

  updateNavIndex = (i: number) => {
    this.setState((prevState) => ({
      navState: {
        ...prevState.navState,
        index: i,
      },
    }));
  };

  renderScene = (
    props: SceneRendererProps & {
      route: {
        key: 'following' | 'popular' | 'explore';
        title: string;
      };
    },
  ) => {
    switch (props.route.key) {
      case 'following':
        return (
          <ThumbGrid
            emptyListText="No Saved Channels Yet!"
            onCategoryPres={this.onCategoryPress}
            onEmptyActionPress={() => this.updateNavIndex(2)}
            categories={this.props.savedCategories}
          />
        );
      case 'explore':
        return (
          <ThumbGrid
            emptyListText="Seems like there is nothing to explore right now"
            onCategoryPres={this.onCategoryPress}
            categories={this.state.exploreCategories}
          />
        );
      case 'popular':
        return (
          <ThumbGrid
            emptyListText="Doesn't seem like there is anything populat at the moment"
            onCategoryPres={this.onCategoryPress}
            categories={this.state.popularCategories}
          />
        );
    }
  };

  renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavState;
    },
  ) => {
    return (
      <TabBar
        {...props}
        navigationState={this.state.navState}
        activeColor={colors.background00}
        tabStyle={styles.tabStyle}
        pressOpacity={0.9}
        contentContainerStyle={{ backgroundColor: colors.background00 }}
        labelStyle={styles.labelStyle}
        renderLabel={this.renderLabel}
      />
    );
  };

  renderLabel = (
    scene: Scene<{
      key: 'following' | 'popular' | 'explore';
      title: string;
    }> & {
      focused: boolean;
      color: string;
    },
  ) => {
    return (
      <View
        style={[styles.labelContainer, { borderWidth: scene.focused ? 1 : 0 }]}>
        <Text
          allowFontScaling={true}
          style={[styles.labelStyle, { color: scene.color }]}>
          {scene.route.title}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TabView
          onIndexChange={this.updateNavIndex}
          renderTabBar={(p) => this.renderTabBar(p)}
          navigationState={this.state.navState}
          renderScene={this.renderScene}
          initialLayout={{ width: screenWidth }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    backgroundColor: colors.primary600,
    paddingVertical: 20,
  },
  labelContainer: {
    borderColor: colors.secondary500,
    borderRadius: 50,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 14,
    marginHorizontal: 20,
    width: '100%',
    textAlign: 'center',
  },
});

export default Main;
