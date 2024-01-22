/* InputBox component
 *
 * label: The text above the input box, String
 * labelStyles: The styles to apply to the label, fontSize, color, letterSpacing, etc.
 * inputWidth: How wide the TextInput element is
 * secureTextEntry: Whether the text entered by the user should be censored or not
 * marginVertical: marginTop and marginBottom value for the View containing the component
 * marginHorizontal: marginLeft and marginRigfht value for the View containing the component.
 *
 * */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type Props = {
  label: string;
  labelStyles: object;
  inputWidth: number;
  secureTextEntry: boolean;
  marginVertical: number;
  marginHorizontal: number;
};

const InputBox: React.FC<Props> = ({
  label,
  labelStyles,
  inputWidth,
  secureTextEntry,
  marginVertical,
  marginHorizontal
}) => {
  return (
    <View
      style={{
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal
      }}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        style={[styles.inputBox, { width: inputWidth }]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    color: '#000',
    backgroundColor: 'white',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 10,
    fontSize: 15,
    textAlignVertical: 'center'
  }
});

export default InputBox;
