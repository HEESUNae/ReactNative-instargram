import { FlatList, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import Header from '../components/header/Header';
import { useTotalFeedList } from '../state/selectors/feed';
import FeedListItem from '../components/FeedListItem';
import { useDispatch } from 'react-redux';
import { TypeFeedListDispatch, getFeedList } from '../state/actions/feed';
import Icon from '../components/Icon';
import { useRootNavigation } from '../navigations/RootStackNavigation';

const HomeScreen: React.FC = () => {
  const FeedList = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const navigation = useRootNavigation();

  useEffect(() => {
    dispatch(getFeedList());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Header.Title title="HOME" />
          <Icon name="add" onPress={() => navigation.navigate('AddFeed')} />
        </View>
      </Header>
      <FlatList
        data={FeedList}
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

export default HomeScreen;
