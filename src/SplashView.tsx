import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

interface SplashView {
  onFinishLoad: () => void;
}

const SplashView: React.FC<SplashView> = ({ onFinishLoad }) => {
  useEffect(() => {
    setTimeout(() => {
      onFinishLoad();
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 36 }}>Splash View</Text>
    </View>
  );
};

export default SplashView;
