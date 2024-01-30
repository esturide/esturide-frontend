import React from 'react';
import Login from './src/screens/Login.tsx';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar.tsx';
import mobileAds from 'react-native-google-mobile-ads';

const App: Element = () => {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      console.log('Ads initialized');
    });
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
};

export default App;
