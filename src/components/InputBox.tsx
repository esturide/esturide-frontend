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
  onChange: Function;
  onBlur: Function;
  value: any;
  errors: object;
};

const InputBox: React.FC<Props> = ({
  label,
  labelStyles,
  inputWidth,
  secureTextEntry,
  marginVertical,
  marginHorizontal,
  onChange,
  onBlur,
  value,
  errors
}) => {
  return (
    <View
      style={{
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal
      }}
    >
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        style={[
          styles.inputBox,
          { width: inputWidth },
          errors ? styles.errorStyles : console.log('')
        ]}
        secureTextEntry={secureTextEntry}
        onChangeText={(value) => onChange(value)}
        onBlur={onBlur}
        value={value}
      />
      {errors ? (
        <Text style={{ color: 'red', fontSize: 12 }}>{errors.message}</Text>
      ) : (
        console.log('Input valido')
      )}
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
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 5,
    fontSize: 15,
    textAlignVertical: 'center',
    elevation: 1,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  errorStyles: {
    borderColor: '#dd2c2f',
    backgroundColor: '#ffcacc'
  }
});

export default InputBox;
