import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds
} from 'react-native-google-mobile-ads';
import ProfileImage from '../components/ProfileImage';
import AccountButton from '../components/AccountButton';
import TextInfo from '../components/TextInfo';
import MessageButton from '../components/MessageButton';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage bgColor={'#00b4d8'} borderColor={'#023e8a'} />
      <AccountButton label={'Pasajero'} />
      <View style={styles.userInfoContainer}>
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
      <View style={styles.adBanner}>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>
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
    width: 325,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 25,
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
  },
  adBanner: {
    position: 'absolute',
    bottom: 0
  }
});

export default UserProfile;
