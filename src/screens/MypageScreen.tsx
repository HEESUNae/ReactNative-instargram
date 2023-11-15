import { View } from 'react-native';
import React from 'react';
import Header from '../components/header/Header';

const MypageScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="MY PAGE" />
      </Header>
    </View>
  );
};

export default MypageScreen;
