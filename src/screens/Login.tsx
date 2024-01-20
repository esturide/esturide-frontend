import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const Login: Element = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
          <View style={styles.content}>
            <Text style={styles.title}>Bienvenido</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nombre de Usuario:</Text>
              <TextInput style={styles.inputBox} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Contraseña:</Text>
              <TextInput style={styles.inputBox} secureTextEntry={true} />
            </View>
          </View>
          <View style={{ flex: 1 }} />
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImageLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoContainer: {
    width: '80%',
    alignItems: 'center'
  },
  logo: {
    width: 350,
    height: 350
  },
  content: {
    backgroundColor: '#00000077',
    width: '100%',
    alignItems: 'center',
    padding: 5
  },
  title: {
    color: '#ffffff',
    letterSpacing: 5,
    fontSize: 40,
    fontWeight: 'bold',
    borderColor: 'black'
  },
  inputContainer: {
    marginTop: 20
  },
  inputLabel: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 5
  },
  inputBox: {
    color: '#000',
    backgroundColor: 'white',
    height: 35,
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 10
  }
});

export default Login;
