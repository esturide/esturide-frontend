import React from 'react';
import Login from './src/screens/Login.tsx';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar.tsx';

const App: Element = () => {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
};

export default App;
