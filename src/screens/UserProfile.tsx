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
import { ScrollView } from 'react-native-gesture-handler';
import EditProfile from './EditProfile';
import { useGetUserData } from '../hooks/userGetUserData';

const UserProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, userData] = useGetUserData();

  console.log(userData, loading);

  return (
    <SafeAreaView style={styles.container}>
      <EditProfile modalState={modalVisible} setModalState={setModalVisible} />
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
