import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native';

const Login: Element = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/fondo-peces.jpg')}
        style={styles.bgImageLayout}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.content}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImageLayout: {
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    maxWidth: '80%',
    alignItems: 'center'
  },
  logo: {
    width: 400,
    height: 400
  }
});

export default Login;
