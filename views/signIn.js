import React from 'react';
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
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {useState} from 'react';
import {CustomScrollView} from '../components/containers';

const SignIn = ({navigation}) => {
  const theme = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
      keyboardVerticalOffset={100}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <CustomScrollView>
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
                  style={styles.imgSigIn}></Image>
              </View>
              <LabelForm texto="Usuario"></LabelForm>

              <View style={styles.center}>
                <MainInput placeholder="Nombre de usuario"></MainInput>
              </View>

              <LabelForm texto="Email"></LabelForm>

              <View style={styles.center}>
                <MainInput placeholder="Ejemplo@mail.com"></MainInput>
              </View>

              <LabelForm texto="Número de teléfono"></LabelForm>

              <View style={styles.center}>
                <NumberInput placeholder="Número de teléfono"></NumberInput>
              </View>
              <LabelForm texto="Contraseña"></LabelForm>

              <View style={styles.center}>
                <PwdInput placeholder="Contraseña"></PwdInput>
              </View>
              <LabelForm texto="Confirmar contraseña"></LabelForm>

              <View style={styles.center}>
                <PwdInput placeholder="Confirmar contraseña"></PwdInput>
              </View>
            </View>
            <View style={styles.badge}>
              <LabelForm texto=" Acepto términos de servicio"></LabelForm>

              <Switch
                trackColor={{false: '#767577', true: '#F35C56'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.sigInSwitch}
              />
            </View>
            <View style={styles.center}>
              <Boton
                texto="Ingresar"
                onPress={() => {
                  navigation.navigate('index');
                }}></Boton>
            </View>
          </View>
        </CustomScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  sigInSwitch: {
    marginLeft: '8%',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
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
    marginTop: 10,
  },
  center: {
    alignItems: 'center',
  },
  imgSigIn: {
    width: 100,
    height: 100,
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

export default SignIn;
