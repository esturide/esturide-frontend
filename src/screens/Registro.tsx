import React from 'react';
import Logo from '../../src/components/Logo';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const Registro: Element = () => {
  return (
    <ImageBackground
      style={styles.imagenFondo}
      blurRadius={5}
      source={require('../../assets/cut-Bg.jpg')}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.bandaBienvenido}>
          <Text style={styles.titulo}>Bienvenido</Text>
        </View>
        <ButtonInicioSesion />
        <ButtonRegistro />
      </View>
    </ImageBackground>
  );
};
const ButtonInicioSesion = () => {
  return (
    <View>
      <Text>
        <TouchableOpacity
          style={styles.botonInicio}
          onPress={() => alert('Estas seguro que quieres avanzar?')}>
          <Text style={styles.textoboton}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
const ButtonRegistro = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.botonRegistro}
        onPress={() => alert('Estas seguro que quieres avanzar?')}>
        <Text style={styles.textoboton}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    height: 'auto',
    width: 'auto',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 8,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  botonInicio: {
    backgroundColor: '#0096c7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: '#05769c',
    borderWidth: 2,
    margin: 10,
  },
  botonRegistro: {
    backgroundColor: '#023e8a',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderColor: '#04306a',
    borderWidth: 2,
    margin: 10,
  },
  textoboton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 8,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  imagenFondo: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logoEsturide: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bandaBienvenido: {
    position: 'absolute',

    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    top: 500,
    bottom: 310,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Registro;
