import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
  },
});
