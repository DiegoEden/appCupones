import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, useColorScheme} from 'react-native';

export const CenterView = ({children}) => {
  return <View style={styles.center}>{children}</View>;
};

export const CustomScrollView = ({children}) => {
  const theme = useColorScheme();
  return (
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>{children}</>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#2A2929',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
});
