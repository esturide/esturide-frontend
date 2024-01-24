import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Login from './src/screens/Login.tsx';
import UserProfile from './src/screens/UserProfile.tsx';
import { NavigationContainer } from '@react-navigation/native';

const App: Element = () => {
  return (
    <NavigationContainer>
      <UserProfile />
    </NavigationContainer>
  );
};

export default App;
