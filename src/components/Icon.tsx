import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export type IconName = keyof typeof Ionicons.glyphMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, color = 'black', onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default Icon;
