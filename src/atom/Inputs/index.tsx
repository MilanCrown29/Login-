import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {baseStyles} from '../../styles/theme';
import inputStyles from './style';

interface InputProps {
  value: string;
  setValue: string;
  label?: string;
  placeHolder?: string;
  icon: string;
  secureText?: boolean;
}
const Inputs = (props: InputProps) => {
  return (
    <View>
      {props.label && (
        <Text style={[baseStyles.headerSm, inputStyles.label]}>
          {props.label}
        </Text>
      )}
      <View style={inputStyles.inputContainer}>
        <Ionicons
          name={props.icon}
          color="black"
          size={24}
          style={inputStyles.icon}
        />
        <TextInput
          placeholder={props.placeHolder}
          value={props.icon}
          onChangeText={props.setValue}
          style={inputStyles.textInput}
          secureTextEntry={props.secureText}
        />
      </View>
    </View>
  );
};
export default Inputs;
