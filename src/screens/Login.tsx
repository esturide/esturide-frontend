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
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonIngresar]}>
              <Text style={styles.buttonLabel}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonVolver]}>
              <Text style={styles.buttonLabel}>Volver</Text>
            </TouchableOpacity>
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
    padding: 5,
    marginTop: -20
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
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 45,
    width: 250,
    borderRadius: 22
  },
  buttonLabel: {
    fontSize: 20,
    letterSpacing: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonIngresar: {
    backgroundColor: '#0096c7'
  },
  buttonVolver: {
    backgroundColor: '#e66063'
  }
});

export default Login;
