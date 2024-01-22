import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../components/Logo';
import InputBox from '../components/InputBox';

const Login = (): JSX.Element => {
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
            <InputBox
              label={'Nombre de Usuario:'}
              labelStyles={styles.inputLabel}
              inputWidth={300}
              secureTextEntry={false}
              marginVertical={10}
              marginHorizontal={0}
            />
            <InputBox
              label={'Contraseña:'}
              labelStyles={styles.inputLabel}
              inputWidth={300}
              secureTextEntry={true}
              marginVertical={10}
              marginHorizontal={0}
            />
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
    borderColor: 'black',
    marginBottom: 10
  },
  inputLabel: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 5
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
