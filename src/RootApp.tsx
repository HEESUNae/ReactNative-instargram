import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './navigations/RootStackNavigation';
import SplashView from './SplashView';

const RootApp: React.FC = () => {
  const [initalize, setInitalize] = useState(false);

  if (!initalize) return <SplashView onFinishLoad={() => setInitalize(true)} />;

  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default RootApp;
