import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EditButton = ({ onPress }) => {
  return (
    <View style={styles.editBtn}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name={'pencil'} color={'black'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  editBtn: {
    position: 'absolute',
    top: 12,
    right: 12
  }
});

export default EditButton;
