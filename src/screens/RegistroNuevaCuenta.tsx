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
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = yup.object({
  nombre: yup.string().required('Campo Obligatorio'),
  apellidoPaterno: yup.string().required('Campo Obligatorio'),
  apellidoMaterno: yup.string().required('Campo Obligatorio'),
  codigo: yup.string().required('Campo Obligatorio'),
  fechaNacimiento: yup.string().required('Campo Obligatorio'),
  curp: yup
    .string()
    .matches(
      /^[A-Za-z]{4}\d{6}[MH][A-Za-z]{5}[A-Za-z0-9]\d$/,
      'Formato invalido'
    )
    .length(18)
    .required('Campo Obligatorio')
});

const RegistroNuevaCuenta = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  return (
    <ImageBackground
      source={require('../../assets/cut-Bg.jpg')}
      blurRadius={5}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.bandaDatos}>
          <Text style={styles.titulo}>Datos personales</Text>
        </View>
        <View style={styles.inputZone}>
          <View style={styles.row}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Nombre"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.nombre}
                />
              )}
              name="nombre"
              defaultValue={''}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Apellido Paterno"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.apellidoPaterno}
                />
              )}
              name="apellidoPaterno"
              defaultValue={''}
            />
          </View>
          <View style={styles.row}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Apellido Materno"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.apellidoMaterno}
                />
              )}
              name="apellidoMaterno"
              defaultValue={''}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Código de UDG"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.codigo}
                />
              )}
              name="codigo"
              defaultValue={''}
            />
          </View>
          <View style={styles.row}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Fecha de Nacimiento"
                  labelStyles={styles.labelStyles}
                  inputWidth={300}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.fechaNacimiento}
                />
              )}
              name="fechaNacimiento"
              defaultValue={''}
            />
          </View>
          <View style={styles.row}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="CURP"
                  labelStyles={styles.labelStyles}
                  inputWidth={300}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.curp}
                />
              )}
              name="curp"
              defaultValue={''}
            />
          </View>
        </View>
        <ButtonSiguiente
          pressFunc={handleSubmit((data) => {
            navigation.navigate('RegistroNuevoUsuario');
          })}
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
          <Text style={styles.textoboton}>Siguiente</Text>
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
    letterSpacing: 5
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
    top: 360,
    bottom: 440,
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
    marginBottom: 10
  }
});

export default RegistroNuevaCuenta;
