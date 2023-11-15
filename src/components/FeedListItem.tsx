import React from 'react';
import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native';
import Button from './Button';
import Icon from './Icon';

interface FeedListItemProps {
  image: string;
  isLiked: boolean;
  likeCount: number;
  writer: string;
  comment: string;
  onPressFeed: () => void;
}

const FeedListItem: React.FC<FeedListItemProps> = ({ image, isLiked, likeCount, writer, comment, onPressFeed }) => {
  const { width } = useWindowDimensions();

  return (
    <Button onPress={onPressFeed}>
      <View>
        <Image source={{ uri: image }} width={width} height={width} />
        <View style={styles.likeContainer}>
          <Icon name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? 'red' : 'black'} />
        </View>
        <View style={styles.infoContainter}>
          <Text style={styles.infoLike}>좋아요 {likeCount} 개</Text>
          <View style={styles.infoDescContainer}>
            <Text style={styles.infoDescText}>{writer}</Text>
            <Text style={styles.infoDescText}>{comment}</Text>
          </View>
        </View>
      </View>
    </Button>
  );
};

export default FeedListItem;

const styles = StyleSheet.create({
  infoContainter: {
    paddingHorizontal: 12,
  },
  infoLike: {
    fontSize: 16,
    marginBottom: 4,
  },
  infoDescContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  infoDescText: {
    fontSize: 16,
  },
  likeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
