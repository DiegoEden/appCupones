import React from 'react';
import {LoginButton} from '../components/button';
import {VerInput} from '../components/input';
import {
  View,
  useColorScheme,
  StyleSheet,
  Text,
  Pressable,
  Appearance,
  StatusBar,
} from 'react-native';

const PhoneSignIn = ({navigation}) => {
  const theme = useColorScheme();
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
    <View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View
        style={[
          styles.card,
          theme === 'dark' ? styles.darkCard : styles.light,
        ]}>
        <Text
          style={[
            styles.smsHead,
            ,
            theme === 'dark' ? styles.dark : styles.light,
          ]}>
          Ingrese el código de verificación enviado a través de
        </Text>
        <Text style={styles.phoneN}>(+503) 76893569</Text>
        <View style={styles.rowSMS}>
          <VerInput></VerInput>
          <VerInput></VerInput>

          <VerInput></VerInput>

          <VerInput></VerInput>
        </View>
        <View style={styles.center}>
          <LoginButton
            texto="Continuar"
            onPress={() => {
              navigation.navigate('index');
            }}></LoginButton>
        </View>
        <View style={styles.smsDiv}>
          <Text
            style={[
              styles.smsHead,
              ,
              theme === 'dark' ? styles.dark : styles.light,
            ]}>
            Solicitar un nuevo código de verificación en 1:38
          </Text>
        </View>
      </View>
      <View style={styles.smsDiv}>
        <Pressable>
          <Text style={styles.pinkHead}>
            Vuelva a enviar el código de verificación?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    marginLeft: 20,
    marginEnd: 20,
    backgroundColor: 'white',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 7,
    paddingBottom: 35,
    paddingTop: 30,
    marginTop: 30,
  },
  rowSMS: {
    flexDirection: 'row',
    marginBottom: 15,
    marginEnd: 10,
    marginLeft: 20,
  },
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: '#343434',
  },
  center: {
    alignItems: 'center',
  },
  smsDiv: {
    paddingLeft: 15,
    paddingEnd: 15,
    paddingTop: 15,
  },
  phoneN: {
    fontFamily: 'Montserrat-Medium',
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 5,
    color: '#F35C56',
  },
  smsHead: {
    fontSize: 11,
    marginLeft: 20,
    marginEnd: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#272459',
    marginTop: 10,
  },
  pinkHead: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#F35C56',
    textAlign: 'center',
    marginTop: 60,
  },
});

export default PhoneSignIn;
