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
      <TouchableHighlight>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 0}}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            size={60}
            color={'black'}
            style={{ marginRight: -10, padding: 0 }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              borderBottomWidth: 1,
              borderBottomColor: 'black'
            }}
          >
            Pasajero
          </Text>
        </View>
      </TouchableHighlight>
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
    alignItems: 'center'
  },
  switchAccount: {}
});

export default UserProfile;
