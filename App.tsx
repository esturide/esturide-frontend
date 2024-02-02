import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/screens/Login.tsx';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar.tsx';
import mobileAds from 'react-native-google-mobile-ads';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './src/screens/Registro.tsx';
import RegistroNuevaCuenta from './src/screens/RegistroNuevaCuenta.tsx';
import RegistroNuevoUsuario from './src/screens/RegistroNuevoUsuario.tsx';
import UserProfile from './src/screens/UserProfile.tsx';

const Stack = createStackNavigator();

const App: Element = () => {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      console.log('Ads initialized');
    });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="RegistroNuevaCuenta"
          component={RegistroNuevaCuenta}
        />
        <Stack.Screen
          name="RegistroNuevoUsuario"
          component={RegistroNuevoUsuario}
        />
        <Stack.Screen name="UserProfile" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
