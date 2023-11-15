import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import HomeScreen from '../screens/HomeScreen';
import MypageScreen from '../screens/MypageScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => {
        const getIconName = () => (route.name === 'MyPage' ? 'person' : 'home');
        const iconName = getIconName();
        return {
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name={iconName} size={20} color={color} />,
        };
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="MyPage" component={MypageScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
