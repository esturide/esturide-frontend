import React, { useState } from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import InputBox from '../components/InputBox';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGetUserData } from '../hooks/userGetUserData';
import { useSetUserData } from '../hooks/userSetUserData';
import { REACT_APP_API_ENDPOINT } from '@env';

const formSchema = yup.object({
  nombre: yup.string().required('Campo Obligatorio'),
  apellidoPaterno: yup.string().required('Campo Obligatorio'),
  apellidoMaterno: yup.string().required('Campo Obligatorio'),
  fechaNacimiento: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Ingresa una fecha valida')
    .required('Campo Obligatorio')
    .max('2006-01-01', 'Fecha Invalida')
});

const EditProfile = ({ modalState, setModalState }) => {
  const [date, setDate] = useState(dayjs());
  const [loading, userData] = useGetUserData();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const handleReset = () => {
    reset({});
  };

  return (
    <Modal
      animationType="slide"
      visible={modalState}
      transparent={false}
      onRequestClose={() => setModalState(false)}
    >
      <View style={styles.editProfileHeader}>
        <Text style={styles.editTitle}>Editar Perfil</Text>
        <TouchableOpacity
          style={styles.editCancelBtn}
          onPress={() => {
            handleReset();
            setModalState(false);
          }}
        >
          <Text style={styles.editCancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.editProfileContainer}>
        <View style={styles.editInputsContainer}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              columnGap: 15,
              width: 350
            }}
          >
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label={'Nombre:'}
                  labelStyles={styles.editLabels}
                  secureTextEntry={false}
                  inputWidth={350}
                  marginVertical={20}
                  errors={errors.nombre}
                />
              )}
              name="nombre"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label={'Apellido Paterno:'}
                  labelStyles={styles.editLabels}
                  secureTextEntry={false}
                  inputWidth={160}
                  marginVertical={20}
                  errors={errors.apellidoPaterno}
                />
              )}
              name="apellidoPaterno"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputBox
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label={'Apellido Materno:'}
                  labelStyles={styles.editLabels}
                  secureTextEntry={false}
                  inputWidth={160}
                  marginVertical={20}
                  errors={errors.apellidoMaterno}
                />
              )}
              name="apellidoMaterno"
              defaultValue=""
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.editLabels}>Fecha de Nacimiento:</Text>
            {errors.fechaNacimiento && (
              <Text style={{ color: 'red', fontSize: 12, marginTop: 10 }}>
                {errors.fechaNacimiento.message}
              </Text>
            )}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.datePickerContainer}>
                  <DateTimePicker
                    mode={'single'}
                    date={value}
                    onChange={(params) => onChange(params.date)}
                    calendarTextStyle={{ color: 'black' }}
                    headerTextStyle={{
                      color: 'black',
                      textTransform: 'capitalize'
                    }}
                    headerTextContainerStyle={{ color: 'black' }}
                    weekDaysTextStyle={{
                      color: 'black',
                      textTransform: 'capitalize'
                    }}
                    locale={'es-mx'}
                  />
                </View>
              )}
              name="fechaNacimiento"
              defaultValue={dayjs().toDate()}
            />
          </View>

          <View style={styles.editProfileButtons}>
            <TouchableOpacity
              style={styles.editSubmitBtn}
              onPress={handleSubmit((data) => {
                console.log(dayjs(data.fechaNacimiento).format('DD-MM-YYYY'));
                setModalState(false);

                handleReset();

                fetch(`${REACT_APP_API_ENDPOINT}/users/1`, {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDEsImV4cCI6MTcxMTY2MjY3OH0.yJEfuBfNQVsgvfNaXwb0CfzgH_UUOUHowO5iLnk_sNo'}`,
                    'Content-Type': 'application/json'
                  }
                });
              })}
            >
              <Text style={styles.editSubmitText}>Guardar Cambios</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    elevation: 10,
    shadowOffset: {
      height: 3,
      width: 3
    },
    marginVertical: 15
  },
  modalContentWrapper: {
    height: '80%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: 'white',
    marginTop: 'auto'
  },
  editProfileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    elevation: 1,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: 'black'
  },
  editTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins-bold'
  },
  editCancelText: {
    color: 'white',
    textAlign: 'center'
  },
  editCancelBtn: {
    backgroundColor: '#e66063',
    padding: 10,
    borderRadius: 16
  },
  editSubmitBtn: {
    backgroundColor: '#0096c7',
    padding: 10,
    borderRadius: 16
  },
  editSubmitText: {
    color: 'white',
    textAlign: 'center'
  },
  editProfileButtons: {
    marginBottom: 15
  },
  editInputsContainer: {
    paddingHorizontal: 15,
    marginTop: 10
  },
  editLabels: {
    color: 'black',
    fontSize: 25,
    maxWidth: 170
  }
});

export default EditProfile;
