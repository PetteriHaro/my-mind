import AsyncStorage from '@react-native-community/async-storage';

type AsyncKeys = 'followed';

const asyncStorage = {
  getItem: async (key: AsyncKeys) => {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  },
  setItem: (key: AsyncKeys, item: any) =>
    AsyncStorage.setItem(key, JSON.stringify(item)),
};

export default asyncStorage;
