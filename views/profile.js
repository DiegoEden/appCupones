import React, {Profiler} from 'react';
import {LabelForm} from '../components/label';
import {MainInput, NumberInput, PwdInput} from '../components/input';
import {Boton} from '../components/button';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
  Appearance,
  StatusBar,
  BackHandler,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'react-native';
import {CenterView, CustomScrollView} from '../components/containers';

const Profile = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
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
    <KeyboardAvoidingView
      style={theme === 'dark' ? styles.dark : styles.light}
      behavior="padding"
      enabled
      keyboardVerticalOffset={20}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <CustomScrollView>
          <View
            style={[
              styles.container,
              theme === 'dark' ? styles.dark : styles.light,
            ]}>
            <CenterView>
              <Image
                source={require('../src/img/logo2Dark.png')}
                style={styles.imgSigIn}></Image>
            </CenterView>

            <View
              style={[
                styles.card,
                theme === 'dark' ? styles.darkCard : styles.light,
              ]}>
              <LabelForm texto="Usuario"></LabelForm>

              <CenterView>
                <MainInput placeholder="Nombre de usuario"></MainInput>
              </CenterView>

              <LabelForm texto="Email"></LabelForm>

              <CenterView>
                <MainInput placeholder="Ejemplo@mail.com"></MainInput>
              </CenterView>

              <LabelForm texto="Número de teléfono"></LabelForm>

              <CenterView>
                <NumberInput placeholder="Número de teléfono"></NumberInput>
              </CenterView>
              <LabelForm texto="Contraseña"></LabelForm>

              <CenterView>
                <PwdInput placeholder="Contraseña"></PwdInput>
              </CenterView>
            </View>

            <CenterView>
              <Boton
                texto="Confirmar"
                onPress={() => {
                  navigation.navigate('index');
                }}></Boton>
            </CenterView>
          </View>
        </CustomScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 90,
    marginBottom: 20,
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
    paddingTop: 20,
    marginTop: 30,
  },

  imgSigIn: {
    width: '100%',
    height: 350,
    marginBottom: -90,
  },
  dark: {
    backgroundColor: '#2A2929',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: '#2A2929',
  },
  badge: {
    flexDirection: 'row',
    paddingTop: 3,
    marginLeft: '8%',
  },
});

export default Profile;
