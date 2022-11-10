import React from 'react';
import {View, useColorScheme, StyleSheet, Image, Text} from 'react-native';

const Main = () => {
  const theme = useColorScheme();

  return (
    <View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View style={styles.center}>
        <Text>Hola mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
});
export default Main;
