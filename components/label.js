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
});
