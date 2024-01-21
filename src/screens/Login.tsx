import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../components/Logo';

const Login: Element = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/fondo-peces.jpg')}
          style={styles.bgImageLayout}>
          <Logo />
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
            <TouchableHighlight
              style={[styles.button, styles.buttonIngresar]}
              onPress={() => console.log('ingresar')}>
              <Text style={styles.buttonLabel}>Ingresar</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button, styles.buttonVolver]}
              onPress={() => console.log('volver')}>
              <Text style={styles.buttonLabel}>Volver</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            style={styles.helpContainer}
            onPress={() => console.log('help')}>
            <MaterialCommunityIcons name={'help'} size={40} color={'white'} />
          </TouchableHighlight>
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
    height: 40,
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 10,
    fontSize: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 45,
    width: 225,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black'
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
  },
  helpContainer: {
    backgroundColor: '#b1b2b5',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 30,
    marginTop: 50,
    marginRight: 20
  }
});

export default Login;
