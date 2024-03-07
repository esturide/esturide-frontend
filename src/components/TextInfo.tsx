import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextInfo = ({ title, content }) => {
  return (
    <View>
      <Text style={styles.userInfoTitle}>{title}</Text>
      <Text style={styles.userInfoText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TextInfo;
