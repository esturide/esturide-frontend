import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageButton = () => {
  return (
    <TouchableOpacity style={styles.messageBtn}>
      <MaterialCommunityIcons
        name={'message-text-outline'}
        size={40}
        color={'white'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default MessageButton;
