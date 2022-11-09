import React from 'react';
import {View, useColorScheme, StyleSheet, Image, Text} from 'react-native';
import {MarginBoton, Boton} from '../components/button';

const Home = ({navigation}) => {
  const theme = useColorScheme();

  return (
    <View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View style={styles.center}>
        <Image
          style={styles.logo2}
          source={
            theme === 'light'
              ? require('../src/img/logo2.png')
              : require('../src/img/logo2Dark.png')
          }></Image>
        <Text
          style={[styles.h1, theme === 'dark' ? styles.dark : styles.light]}>
          Cupones
        </Text>
        <Text
          style={[
            styles.titulo,
            styles.margin,
            theme === 'dark' ? styles.darkTitle : styles.light,
          ]}>
          Elegir cupones, simplemente seleccione y canjea.
        </Text>
        <MarginBoton
          texto="Empezar"
          onPress={() => {
            navigation.navigate('Home');
          }}></MarginBoton>
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
  imgSigIn: {
    width: 100,
    height: 100,
  },
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },
  darkTitle: {
    color: '#D6D6D6',
  },
  light: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: '#343434',
  },
  h1: {
    color: '#272459',
    marginTop: -70,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  titulo: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: '#75759E',
    marginBottom: 30,
  },
  logo2: {
    width: '100%',
    height: '70%',
  },
  margin: {
    marginLeft: 15,
    marginEnd: 15,
  },
});

export default Home;
