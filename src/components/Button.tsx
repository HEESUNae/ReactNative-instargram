import React from 'react';
import { Pressable } from 'react-native';

interface ButtonProps {
  children: React.ReactElement;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

export default Button;
