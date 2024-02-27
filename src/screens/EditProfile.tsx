import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import InputBox from '../components/InputBox';
import DateTimePicker from 'react-native-ui-datepicker';
import 'dayjs/locale/es-mx';
import dayjs from 'dayjs';

const EditProfile = ({ modalState, setModalState }) => {

  const [date, setDate] = useState(dayjs());

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
          onPress={() => setModalState(false)}
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
            <InputBox
              label={'Nombre:'}
              labelStyles={styles.editLabels}
              secureTextEntry={false}
              inputWidth={350}
              marginVertical={20}
            />
            <InputBox
              label={'Apellido Paterno:'}
              labelStyles={styles.editLabels}
              secureTextEntry={false}
              inputWidth={160}
              marginVertical={20}
            />
            <InputBox
              label={'Apellido Materno:'}
              labelStyles={styles.editLabels}
              secureTextEntry={false}
              inputWidth={160}
              marginVertical={20}
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.editLabels}>Fecha de Nacimiento:</Text>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                mode={'single'}
                date={date}
                onChange={(params) => setDate(params.date)}
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
          </View>

          <View style={styles.editProfileButtons}>
            <TouchableOpacity style={styles.editSubmitBtn}>
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
