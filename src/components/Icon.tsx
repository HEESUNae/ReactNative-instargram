import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export type IconName = keyof typeof Ionicons.glyphMap;

interface IconProps {
  name: IconName;
  size: number;
  color: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
