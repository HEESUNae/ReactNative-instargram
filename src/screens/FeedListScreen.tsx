import { View } from 'react-native';
import React from 'react';
import Header from '../components/header/Header';

const FeedListScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="FEED LIST" />
      </Header>
    </View>
  );
};

export default FeedListScreen;
