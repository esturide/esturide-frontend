import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileImage = ({ bgColor, borderColor }) => {
  return (
    <View
      style={[
        styles.profileImage,
        { backgroundColor: bgColor, borderColor: borderColor }
      ]}
    >
      <MaterialCommunityIcons
        name={'account-outline'}
        size={220}
        color={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 8
  }
});

export default ProfileImage;
