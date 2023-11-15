import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import AddFeedScreen from '../screens/AddFeedScreen';
import FeedListScreen from '../screens/FeedListScreen';

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
