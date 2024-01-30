import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Pressable
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BannerAd,
  BannerAdSize,
  TestIds
} from 'react-native-google-mobile-ads';
import ProfileImage from '../components/ProfileImage';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage/>
      <TouchableHighlight
        onPress={() => console.log('account switched')}
        underlayColor={'#caf0f8'}
        style={styles.accountBtn}
      >
        <View style={styles.accountBtnContainer}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            size={50}
            color={'black'}
          />
          <Text style={styles.accountBtnText}>Pasajero</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userInfoTitle}>Nombre:</Text>
          <Text style={styles.userInfoText}>Gesem Hanniel Martinez Montes</Text>
        </View>
        <View>
          <Text style={styles.userInfoTitle}>Codigo:</Text>
          <Text style={styles.userInfoText}>222952617</Text>
        </View>
        <View>
          <Text style={styles.userInfoTitle}>Capital:</Text>
          <Text style={styles.userInfoText}>$100.00</Text>
        </View>
      </View>
      <Pressable
        style={styles.vehicleRegister}
        onPress={() => console.log('pressable')}
      >
        <Text style={styles.vehicleQuestion}>Quieres ser conductor?</Text>
        <Text style={styles.vehicleLink}>Registra tu vehiculo!</Text>
      </Pressable>
      <TouchableHighlight style={styles.messageBtn}>
        <MaterialCommunityIcons
          name={'message-text-outline'}
          size={40}
          color={'white'}
        />
      </TouchableHighlight>
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
  accountBtn: {
    marginLeft: -30,
    marginVertical: 10
  },
  accountBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -5
  },
  accountBtnText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
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
  userInfoTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 2
  },
  userInfoText: {
    color: 'black',
    fontSize: 20
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
  },
  messageBtn: {
    backgroundColor: '#b1b2b5',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: '65%',
    right: 10
  }
});

export default UserProfile;
