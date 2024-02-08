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
  user: yup.string().required('Campo Obligatorio'),
  email: yup.string().email('Formato Invalido').required('Campo Obligatorio'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Los correos no coinciden')
    .required('Campo Obligatorio'),
  password: yup.string().required('Campo Obligatorio'),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Contraseñas no coinciden')
    .required('Campo Obligatorio')
});

const RegistroNuevoUsuario = ({ navigation }) => {
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
          <Text style={styles.titulo}>Datos de Usuario</Text>
        </View>
        <View style={styles.inputZone}>
          <View style={styles.row}>
            {/* Nombre de Usuario */}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Nombre de Usuario"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                  errors={errors.user}
                />
              )}
              name="user"
              rules={{ required: true }}
              defaultValue={''}
            />
          </View>
          <View style={styles.row}>
            {/* Correo Electrónico */}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.email}
                  label="Email"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue={''}
            />
            {/* Confirmar Correo Electrónico */}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.confirmEmail}
                  label="Confirmar Email"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={false}
                  marginVertical={10}
                  marginHorizontal={5}
                />
              )}
              name="confirmEmail"
              rules={{ required: true }}
              defaultValue={''}
            />
          </View>
          <View style={styles.row}>
            {/* Contraseña */}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.confirmEmail}
                  label="Contraseña"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={true}
                  marginVertical={10}
                  marginHorizontal={5}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue={''}
            />
            {/* Confirmar Contraseña */}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.confirmPass}
                  label="Confirmar Contraseña"
                  labelStyles={styles.labelStyles}
                  inputWidth={150}
                  secureTextEntry={true}
                  marginVertical={10}
                  marginHorizontal={5}
                />
              )}
              name="confirmPass"
              rules={{ required: true }}
              defaultValue={''}
            />
          </View>
        </View>
        <ButtonSiguiente
          pressFunc={handleSubmit((data) =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'Registro' }, { name: 'Login' }]
              })
            )
          )}
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
