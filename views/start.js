import React from 'react';
import {MarginBoton, WhiteButton} from '../components/button';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Appearance,
  StatusBar,
} from 'react-native';

const Start = ({navigation}) => {

  const modo = Appearance.getColorScheme();

  if (modo === 'dark') {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('transparent', true);
    StatusBar.setTranslucent(true);
  } else if (modo === 'light') {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('transparent', true);
    StatusBar.setTranslucent(true);
  } else {
    StatusBar.setBarStyle('default', true);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../src/img/frameInicio.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('../src/img/cuponLogo.png')}
          style={styles.logo}></Image>

        <MarginBoton
          texto="Iniciar sesión"
          onPress={() => {
            navigation.navigate('Iniciar Sesión');
          }}></MarginBoton>
        <WhiteButton
          texto="Registrarme"
          onPress={() => {
            navigation.navigate('Registrarme');
          }}></WhiteButton>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default Start;
