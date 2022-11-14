import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Boton = props => {
  const {texto, onPress} = props;
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.textbutton}>{texto}</Text>
    </TouchableOpacity>
  );
};

export const MarginBoton = props => {
  const {texto, onPress} = props;
  return (
    <TouchableOpacity style={styles.Button2} onPress={onPress}>
      <Text style={styles.textbutton}>{texto}</Text>
    </TouchableOpacity>
  );
};

export const WhiteButton = props => {
  const {texto, onPress} = props;
  return (
    <TouchableOpacity style={styles.whiteButton} onPress={onPress}>
      <Text style={styles.whiteText}>{texto}</Text>
    </TouchableOpacity>
  );
};

export const LoginButton = props => {
  const {texto, onPress} = props;
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.textbutton}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textbutton: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  Button: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 15,
    width: '87%',
    marginBottom: 30,
  },
  Button2: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 30,
    width: '87%',
  },
  whiteButton: {
    backgroundColor: '#F3F3F3',
    borderRadius: 22,
    marginTop: 20,
    width: '87%',
  },
  whiteText: {
    color: '#F35C56',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 30,
    width: '87%',
  },
});
