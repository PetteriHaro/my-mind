import { ImageRequireSource } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackList } from './App';

export type CatId =
  | 'fashion'
  | 'science'
  | 'entertainment'
  | 'environment'
  | 'auto'
  | 'finance'
  | 'travel'
  | 'technology';

export interface Category {
  image: ImageRequireSource;
  title: string;
  id: CatId;
  label: string;
  followers: number;
}

export type StackNavProps = StackNavigationProp<StackList, any>;

export interface Article {
  id: string;
  author: string;
  category: CatId;
  createdAt: Date;
  title: string;
  body: string;
}
