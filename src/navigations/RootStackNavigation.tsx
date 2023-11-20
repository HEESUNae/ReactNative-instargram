import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import AddFeedScreen from '../screens/AddFeedScreen';
import FeedListScreen from '../screens/FeedListScreen';
import { FeedInfo } from '../@types/FeedInfo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export type RootStackParamList = {
  BottomTab: undefined;
  FeedList: {
    list: FeedInfo[];
  };
  AddFeed: undefined;
};

const Stack = createNativeStackNavigator();

const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'containedModal',
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="AddFeed" component={AddFeedScreen} />
      <Stack.Screen name="FeedList" component={FeedListScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;

// useNavigation Type
export const useRootNavigation = <RouteName extends keyof RootStackParamList>() => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, RouteName>>();
};

// useRoute Type
export const useRootRoute = <RouteName extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, RouteName>>();
};
