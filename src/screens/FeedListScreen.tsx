import React from 'react';
import { FlatList, View } from 'react-native';
import Header from '../components/header/Header';
import FeedListItem from '../components/FeedListItem';
import { useRootNavigation, useRootRoute } from '../navigations/RootStackNavigation';
import Icon from '../components/Icon';

const FeedListScreen: React.FC = () => {
  const route = useRootRoute<'FeedList'>();
  const navigation = useRootNavigation<'FeedList'>();

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Header.Title title="FEED LIST" />
          <Icon name="close" onPress={() => navigation.goBack()} />
        </View>
      </Header>
      <FlatList
        data={route.params.list}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        renderItem={({ item }) => (
          <FeedListItem
            image={item.imageUrl}
            comment={item.content}
            isLiked={false}
            likeCount={item.likeHistory.length}
            writer={item.writer.name}
            onPressFeed={() => {
              console.log('onPressFeed');
            }}
          />
        )}
      />
    </View>
  );
};

export default FeedListScreen;
