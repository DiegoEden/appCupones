import React, {useState} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export const Boton = props => {
  const {texto} = props;
  return (
    <Pressable style={styles.Button}>
      <Text style={styles.textbutton}>{texto}</Text>
    </Pressable>
  );
};

export const MarginBoton = props => {
  const {texto} = props;
  return (
    <Pressable style={styles.Button2}>
      <Text style={styles.textbutton}>{texto}</Text>
    </Pressable>
  );
};

export const WhiteButton = props => {
  const {texto} = props;
  return (
    <Pressable style={styles.whiteButton}>
      <Text style={styles.whiteText}>{texto}</Text>
    </Pressable>
  );
};


export const LoginButton = props => {
    const {texto} = props;
    return (
      <Pressable style={styles.loginButton}>
        <Text style={styles.textbutton}>{texto}</Text>
      </Pressable>
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
    marginTop: 60,
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
