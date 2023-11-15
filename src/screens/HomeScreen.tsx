import { View } from 'react-native';
import React from 'react';
import Header from '../components/header/Header';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME" />
      </Header>
    </View>
  );
};

export default HomeScreen;
