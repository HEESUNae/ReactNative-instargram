import React, { useEffect, useMemo } from 'react';
import { FlatList, Image, View, useWindowDimensions } from 'react-native';
import { FeedInfo } from '../@types/FeedInfo';
import { useMyFeedList } from '../state/selectors/user';
import Header from '../components/header/Header';
import Button from '../components/Button';
import { useRootNavigation } from '../navigations/RootStackNavigation';
import { useDispatch } from 'react-redux';
import { TypeUserInfoDispatch, getMyFeedList } from '../state/actions/user';

const MypageScreen: React.FC = () => {
  const data = useMyFeedList();
  const { width } = useWindowDimensions();
  const photoSize = useMemo(() => width / 3, [width]);
  const rootNavigation = useRootNavigation();
  const dispatch = useDispatch<TypeUserInfoDispatch>();

  useEffect(() => {
    dispatch(getMyFeedList());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="MY PAGE" />
      </Header>
      <FlatList<FeedInfo>
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <Button
            onPress={() => {
              rootNavigation.navigate('FeedList', { list: data });
            }}
          >
            <Image source={{ uri: item.imageUrl }} width={photoSize} height={photoSize} />
          </Button>
        )}
      />
    </View>
  );
};

export default MypageScreen;
