import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import InputBox from '../../src/components/InputBox';
import Logo from '../../src/components/Logo';
import { CommonActions } from '@react-navigation/native';

const RegistroNuevoUsuario = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/cut-Bg.jpg')}
      blurRadius={5}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.bandaDatos}>
          <Text style={styles.titulo}>Datos de Usuario</Text>
        </View>
        <View style={styles.inputZone}>
          <View style={styles.row}>
            {/* Nombre de Usuario */}
            <InputBox
              label="Nombre de Usuario"
              labelStyles={styles.labelStyles}
              inputWidth={150}
              secureTextEntry={false}
              marginVertical={10}
              marginHorizontal={5}
            />
          </View>
          <View style={styles.row}>
            {/* Correo Electrónico */}
            <InputBox
              label="Email"
              labelStyles={styles.labelStyles}
              inputWidth={150}
              secureTextEntry={false}
              marginVertical={10}
              marginHorizontal={5}
            />
            {/* Confirmar Correo Electrónico */}
            <InputBox
              label="Confirmar Email"
              labelStyles={styles.labelStyles}
              inputWidth={150}
              secureTextEntry={false}
              marginVertical={10}
              marginHorizontal={5}
            />
          </View>
          <View style={styles.row}>
            {/* Contraseña */}
            <InputBox
              label="Contraseña"
              labelStyles={styles.labelStyles}
              inputWidth={150}
              secureTextEntry={true}
              marginVertical={10}
              marginHorizontal={5}
            />
            {/* Confirmar Contraseña */}
            <InputBox
              label="Confirmar Contraseña"
              labelStyles={styles.labelStyles}
              inputWidth={150}
              secureTextEntry={true}
              marginVertical={10}
              marginHorizontal={5}
            />
          </View>
        </View>
        <ButtonSiguiente
          pressFunc={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'Registro' }, { name: 'Login' }]
              })
            )
          }
        />
        <ButtonVolver
          pressFunc={() => navigation.dispatch(CommonActions.goBack())}
        />
      </View>
    </ImageBackground>
  );
};

const ButtonSiguiente = ({ pressFunc }) => {
  return (
    <View>
      <Text>
        <TouchableOpacity style={styles.botonSiguiente} onPress={pressFunc}>
          <Text style={styles.textoboton}>Registrarse</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
const ButtonVolver = ({ pressFunc }) => {
  return (
    <View>
      <TouchableOpacity style={styles.botonVolver} onPress={pressFunc}>
        <Text style={styles.textoboton}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    height: 'auto',
    width: 'auto'
  },
  labelStyles: {
    color: 'black',
    letterSpacing: 5,
    maxWidth: 150
  },
  botonSiguiente: {
    backgroundColor: '#0096c7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: '#05769c',
    borderWidth: 2,
    margin: 10
  },
  botonVolver: {
    backgroundColor: '#023e8a',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderColor: '#04306a',
    borderWidth: 2,
    margin: 10
  },
  textoboton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bandaDatos: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fondo negro semi-opaco
    top: 380,
    bottom: 420,
    left: -50,
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  inputZone: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 30,
    marginBottom: 20
  }
});

export default RegistroNuevoUsuario;
