import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal
} from 'react-native';
import ProfileImage from '../components/ProfileImage';
import AccountButton from '../components/AccountButton';
import TextInfo from '../components/TextInfo';
import MessageButton from '../components/MessageButton';
import BottomAd from '../components/BottomAd';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage bgColor={'#00b4d8'} borderColor={'#023e8a'} />
      <AccountButton label={'Pasajero'} />
      <View style={styles.userInfoContainer}>
        <View style={styles.editBtn}>
          <TouchableOpacity>
            <MaterialCommunityIcons name={'pencil'} color={'black'} size={30} />
          </TouchableOpacity>
        </View>
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
  editBtn: {
    position: 'absolute',
    top: 12,
    right: 12
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
