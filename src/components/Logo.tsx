import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: '80%',
    alignItems: 'center'
  },
  logo: {
    width: 350,
    height: 350
  }
});

export default Logo;
