import React from 'react';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  TouchableOpacity,
  Appearance,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {Text} from 'react-native';
import {LabelForm} from '../components/label';
import {MainInput, NumberInput} from '../components/input';
import {LoginButton} from '../components/button';
const SignInOpt = ({navigation}) => {
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      enabled  keyboardVerticalOffset={50}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            theme === 'dark' ? styles.dark : styles.light,
          ]}>
          <View
            style={[
              styles.card,
              theme === 'dark' ? styles.darkCard : styles.light,
            ]}>
            <View style={styles.center}>
              <Image
                source={require('../src/img/cuponLogo.png')}
                style={styles.imgLogin}></Image>

              <Text
                style={[
                  styles.titulo,
                  theme === 'dark' ? styles.darkTitle : styles.titulo,
                ]}>
                ¡Regístrese para continuar explorando!
              </Text>

              <View style={styles.row}>
                <TouchableOpacity>
                  <Image
                    style={styles.loginIcons}
                    source={require('../src/img/icon-google.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={styles.loginIcons}
                    source={require('../src/img/icon-facebook.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={styles.loginIcons}
                    source={require('../src/img/icon-apple.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <LabelForm texto="Número de teléfono"></LabelForm>
            <View style={styles.center}>
              <NumberInput placeholder="Número de teléfono"></NumberInput>
            </View>

            <View style={styles.center}>
              {/* <LoginButton
                texto="Continuar"
                onPress={() => {
                  navigation.navigate('Regístrate con tu teléfono');
                }}></LoginButton>  */}
              <LoginButton
                texto="Crear cuenta"
                onPress={() => {
                  navigation.navigate('Regístrate');
                }}></LoginButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    marginTop: -80,
    paddingTop: 30,
  },
  center: {
    alignItems: 'center',
  },
  imgLogin: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  loginIcons: {
    marginLeft: 15,
    marginEnd: 15,
    width: 44,
    height: 44,
  },
  darkCard: {
    backgroundColor: '#2A2929',
  },
  darkTitle: {
    color: '#D6D6D6',
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
});

export default SignInOpt;
