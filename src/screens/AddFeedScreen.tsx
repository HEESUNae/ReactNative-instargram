import React, { useCallback, useMemo, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useRootNavigation } from '../navigations/RootStackNavigation';
import Header from '../components/header/Header';
import Icon from '../components/Icon';
import Button from '../components/Button';

const AddFeedScreen: React.FC = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useRootNavigation();
  const [selectPhoto, setSelectPhoto] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');

  const canSave = useMemo(() => {
    if (selectPhoto === null || inputMessage === '') return false;
    return true;
  }, [selectPhoto, inputMessage]);

  const onPressGetPhoto = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (result.canceled) return;
    setSelectPhoto(result.assets[0].uri);
  }, []);

  const onPressSave = useCallback(() => {
    if (!canSave || selectPhoto === null) return;
  }, [canSave, selectPhoto, inputMessage]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Header.Title title="ADD FEED" />
          <Icon name="close" onPress={() => navigation.goBack()} />
        </View>
      </Header>
      <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20, paddingTop: 32 }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Button onPress={onPressGetPhoto}>
            {selectPhoto !== null ? (
              <Image source={{ uri: selectPhoto }} width={100} height={100} style={{ borderRadius: 4 }} />
            ) : (
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightgray',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                }}
              >
                <Icon name="add" color="gray" size={32} />
              </View>
            )}
          </Button>
          <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor: '#ddd' }}>
            <TextInput
              value={inputMessage}
              onChangeText={setInputMessage}
              onSubmitEditing={onPressSave}
              style={{ fontSize: 16, padding: 10 }}
              placeholder="입력해주세요"
            />
          </View>
        </View>
      </View>
      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: canSave ? 'black' : 'gray' }}>
          <View style={{ height: 52, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16 }}>저장하기</Text>
          </View>
          <View style={{ height: safeAreaInsets.bottom }} />
        </View>
      </Button>
    </View>
  );
};

export default AddFeedScreen;
