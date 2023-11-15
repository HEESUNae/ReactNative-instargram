import React from 'react';
import { View } from 'react-native';
import Header from '../components/header/Header';

const AddFeedScreen: React.FC = () => {
  return (
    <View>
      <Header>
        <Header.Title title="ADD FEED" />
      </Header>
    </View>
  );
};

export default AddFeedScreen;
