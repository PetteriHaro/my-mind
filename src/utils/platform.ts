import { Platform, Dimensions } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
