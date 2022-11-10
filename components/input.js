import React, {useState} from 'react';
import {StyleSheet, TextInput, useColorScheme} from 'react-native';

export const PwdInput = props => {
  const theme = useColorScheme();

  const {placeholder} = props;

  return (
    <TextInput
      style={[styles.input, theme === 'dark' ? styles.darkInput : styles.input]}
      placeholder={placeholder}
      placeholderTextColor={'#C8C8D3'}
      textContentType="password"
      secureTextEntry={true}
      cursorColor={'#F35C56'}></TextInput>
  );
};

export const NumberInput = props => {
  const theme = useColorScheme();

  const {placeholder} = props;

  return (
    <TextInput
      style={[styles.input, theme === 'dark' ? styles.darkInput : styles.input]}
      placeholder={placeholder}
      placeholderTextColor={'#C8C8D3'}
      cursorColor={'#F35C56'}
      keyboardType={'number-pad'}></TextInput>
  );
};

export const MainInput = props => {
  const theme = useColorScheme();

  const {placeholder} = props;

  return (
    <TextInput
      style={[styles.input, theme === 'dark' ? styles.darkInput : styles.input]}
      placeholder={placeholder}
      placeholderTextColor={'#C8C8D3'}
      cursorColor={'#F35C56'}></TextInput>
  );
};

export const VerInput = () => {
  const theme = useColorScheme();

  return (
    <TextInput
      style={[
        styles.VeriInput,
        theme === 'dark' ? styles.darkInput : styles.VeriInput,
      ]}
      cursorColor={'#F35C56'}
      keyboardType={'number-pad'}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 4,
    marginTop: 15,
    backgroundColor: '#F0F1F5',
    width: '90%',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  darkInput: {
    backgroundColor: '#464646',
    color: 'white',
  },
  VeriInput: {
    marginLeft: 17,
    marginTop: 15,
    backgroundColor: '#F0F1F5',
    width: '17%',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
});
