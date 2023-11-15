import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';

// Header Type
interface HeaderProps {
  children: React.ReactElement;
}

// HeaderTitle Type
type HeaderType = {
  Title: React.FC<{ title: string }>;
};

const Header: React.FC<HeaderProps> & HeaderType = ({ children }) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.header, { paddingTop: insets.top }]}>{children}</View>;
};

export default Header;

Header.Title = HeaderTitle;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
