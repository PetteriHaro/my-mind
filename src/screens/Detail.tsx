import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavProps } from '../types';
import colors from '../styles/colors';
import { StackList } from '../../App';
import images from '../assets/images';
import { listHeaderHeight } from './List';
import ArticleInfo from '../components/ArticleInfo';
import { CloseIcon } from '../assets/icons';

interface Props {
  navigation: StackNavProps;
  route: RouteProp<StackList, 'Detail'>;
}

class Detail extends React.Component<Props> {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: this.props.route.params.title,
      headerBackImage: (p) => <CloseIcon size={34} color={p.tintColor} />,
      headerTitleStyle: { fontSize: 22, fontWeight: 'bold' },
      headerBackground: () => (
        <View style={{ flex: 1, backgroundColor: colors.primary500 }} />
      ),
    });
  }

  render() {
    const { article } = this.props.route.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={images.articleBackground} style={styles.articleImage} />
        <View style={styles.contentContainer}>
          <ArticleInfo article={article} showCategory={true} />
          <Text style={styles.bodyText}>{article.body}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleImage: {
    width: '100%',
    height: listHeaderHeight + 40,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  bodyText: {
    fontSize: 16,
    marginTop: 20,
    color: colors.darkTextPrimary,
    lineHeight: 28,
    paddingBottom: 25,
  },
});

export default Detail;
