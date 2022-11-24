import React, {useState} from 'react';
import {Text, StyleSheet, useColorScheme} from 'react-native';

export const LabelForm = props => {
  const theme = useColorScheme();
  const {texto} = props;

  return (
    <Text
      style={[
        styles.formLabel,
        theme === 'dark' ? styles.darkLabel : styles.formLabel,
      ]}>
      {texto}
    </Text>
  );
};

export const Title = props => {
  const theme = useColorScheme();
  const {texto} = props;

  return (
    <Text style={[styles.h1, theme === 'dark' ? styles.dark : styles.light]}>
      {texto}
    </Text>
  );
};

export const SubTitle = props => {
  const theme = useColorScheme();
  const {texto} = props;

  return (
    <Text
      style={[
        styles.titulo,
        styles.margin,
        theme === 'dark' ? styles.darkTitle : styles.light,
      ]}>
      {texto}
    </Text>
  );
};

const styles = StyleSheet.create({
  formLabel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 25,
    marginTop: 15,
    color: '#75759E',
  },
  darkLabel: {
    color: '#D6D6D6',
  },
  h1: {
    color: '#272459',
    marginTop: -70,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  dark: {
    backgroundColor: '#2A2929',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: '#75759E',
    marginBottom: 30,
  },
  margin: {
    marginLeft: 15,
    marginEnd: 15,
  },
  darkTitle: {
    color: '#D6D6D6',
  },
});
