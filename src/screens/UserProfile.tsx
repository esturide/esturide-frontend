import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImage}>
        <MaterialCommunityIcons
          name={'account-outline'}
          size={220}
          color={'white'}
        />
      </View>
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
        <View style={styles.nameContainer}>
          <Text style={styles.userInfoTitle}>Nombre:</Text>
          <Text style={styles.userInfoText}>Gesem Hanniel Martinez Montes</Text>
        </View>
        <View style={styles.codigoContainer}>
          <Text style={styles.userInfoTitle}>Codigo:</Text>
          <Text style={styles.userInfoText}>222952617</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.userInfoTitle}>Capital:</Text>
          <Text style={styles.userInfoText}>$100.00</Text>
        </View>
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
  profileImage: {
    backgroundColor: '#00b4d8',
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: '#023e8a',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 8
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
  nameContainer: {

  },
  codigoContainer: {
  },
  balanceContainer: {
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
  }
});

export default UserProfile;
