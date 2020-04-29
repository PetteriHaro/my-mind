import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, StatusBar, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import colors from './styles/colors';
import images from './assets/images';

import Main from './screens/Main';
import List from './screens/List';
import Detail from './screens/Detail';
import { Category, Article, CatId } from './types';
import asyncStorage from './utils/asyncStorage';
import categories from './data/categories';

export type StackList = {
  Main: undefined;
  List: {
    category: Category;
  };
  Detail: {
    article: Article;
    title: string;
  };
};

// Usually I would prefer moving this to redux and have as little local state management as possible
interface State {
  savedCategories: Category[];
  fetchLoading: boolean;
}

const Stack = createStackNavigator<StackList>();

class App extends React.Component<{}, State> {
  state: State = {
    savedCategories: [],
    fetchLoading: true,
  };

  async componentDidMount() {
    try {
      const items: CatId[] | undefined = await asyncStorage.getItem('followed');
      const savedCategories = categories.filter((item) =>
        items?.includes(item.id),
      );
      this.setState({ savedCategories, fetchLoading: false });
    } catch (e) {
      this.setState({ fetchLoading: false });
      Alert.alert('Fetch failed', 'Getting saved channels failed');
    }
  }

  onFollowPress = async (id: CatId) => {
    this.setState({ fetchLoading: true });
    const { savedCategories } = this.state;
    const category = categories.find((item) => item.id === id);
    savedCategories.push(category);
    try {
      let currentItems: CatId[] | undefined = await asyncStorage.getItem(
        'followed',
      );
      if (!currentItems) {
        currentItems = [];
      }
      currentItems.push(id);
      await asyncStorage.setItem('followed', currentItems);
      this.setState({ savedCategories, fetchLoading: false });
    } catch {
      this.setState({ fetchLoading: false });
      Alert.alert('Following Failed', 'Try again later');
    }
  };

  onUnfollowPress = async (id: CatId) => {
    this.setState({ fetchLoading: true });
    const { savedCategories } = this.state;
    const updatedCategories = savedCategories.filter((item) => item.id !== id);
    try {
      let currentItems: CatId[] | undefined = await asyncStorage.getItem(
        'followed',
      );
      if (!currentItems) {
        currentItems = [];
      }
      const updatedItems = currentItems.filter((item) => item !== id);
      await asyncStorage.setItem('followed', updatedItems);
      this.setState({
        savedCategories: updatedCategories,
        fetchLoading: false,
      });
    } catch {
      this.setState({ fetchLoading: false });
      Alert.alert('Unfollowing Failed', 'Try again later');
    }
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerTitle: '',
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerBackground: () => (
              <View style={styles.headerBackground}>
                <Image
                  source={images.iconNavBar}
                  resizeMode="contain"
                  style={styles.headerImage}
                />
              </View>
            ),
          }}
          mode="card">
          <Stack.Screen name="Main">
            {(props) => (
              <Main
                {...props}
                savedCategories={this.state.savedCategories}
                saveFetchLoading={this.state.fetchLoading}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="List">
            {(props) => (
              <List
                {...props}
                savedCategories={this.state.savedCategories}
                saveFetchLoading={this.state.fetchLoading}
                onFollowPress={this.onFollowPress}
                onUnfollowPress={this.onUnfollowPress}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: colors.primary500,
    flex: 1,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: StatusBar.currentHeight,
  },
  headerImage: { height: 30, width: 100 },
});

export default App;
