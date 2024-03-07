import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountButton = ({ label }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('account switched')}
      style={styles.accountBtn}
    >
      <View style={styles.accountBtnContainer}>
        <MaterialCommunityIcons
          name={'chevron-left'}
          size={50}
          color={'black'}
        />
        <Text style={styles.accountBtnText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Bold',
    letterSpacing: 2,
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});

export default AccountButton;
