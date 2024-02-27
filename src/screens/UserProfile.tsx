import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity
} from 'react-native';
import ProfileImage from '../components/ProfileImage';
import AccountButton from '../components/AccountButton';
import TextInfo from '../components/TextInfo';
import MessageButton from '../components/MessageButton';
import BottomAd from '../components/BottomAd';
import EditButton from '../components/EditButton';
import InputBox from '../components/InputBox';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';

const UserProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(dayjs());

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.editProfileContainer}>
          <View style={styles.editProfileHeader}>
            <Text style={styles.editTitle}>Editar Perfil</Text>
            <TouchableOpacity
              style={styles.editCancelBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.editCancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
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

            <View style={styles.editProfileButtons}>
              <TouchableOpacity style={styles.editSubmitBtn}>
                <Text style={styles.editSubmitText}>Guardar Cambios</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ProfileImage bgColor={'#00b4d8'} borderColor={'#023e8a'} />
      <AccountButton label={'Pasajero'} />
      <View style={styles.userInfoContainer}>
        <EditButton onPress={() => setModalVisible(true)} />
        <TextInfo title={'Nombre:'} content={'Gesem Hanniel Martinez Montes'} />
        <TextInfo title={'Codigo:'} content={'222952617'} />
        <TextInfo title={'Capital:'} content={'$100.00'} />
      </View>
      <Pressable
        style={styles.vehicleRegister}
        onPress={() => console.log('pressable')}
      >
        <Text style={styles.vehicleQuestion}>Quieres ser conductor?</Text>
        <Text style={styles.vehicleLink}>Registra tu vehiculo!</Text>
      </Pressable>
      <MessageButton />
      <BottomAd />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#caf0f8',
    flex: 1,
    alignItems: 'center'
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
    gap: 15
  },
  editInputsContainer: {
    paddingHorizontal: 15,
    marginTop: 10
  },
  editLabels: {
    color: 'black',
    fontSize: 25,
    maxWidth: 170
  },
  userInfoContainer: {
    width: 350,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
    rowGap: 15,
    shadowColor: 'black',
    elevation: 8
  },
  vehicleRegister: {
    marginTop: 45
  },
  vehicleQuestion: {
    fontSize: 20,
    letterSpacing: 3,
    color: 'black',
    textAlign: 'center'
  },
  vehicleLink: {
    fontSize: 18,
    letterSpacing: 3,
    color: '#023e8a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: '#023e8a'
  }
});

export default UserProfile;
