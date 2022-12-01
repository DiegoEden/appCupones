import React, {useState} from 'react';
import {MainInput, PwdInput} from '../components/input';
import {LabelForm} from '../components/label';
import {MarginBoton, Boton} from '../components/button';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  Switch,
  Appearance,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {CenterView} from '../components/containers';

const LogIn = ({navigation}) => {
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
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
            <CenterView>
              <Image
                source={require('../src/img/cuponLogo.png')}
                style={styles.imgLogin}></Image>
            </CenterView>

            <LabelForm texto="Usuario"></LabelForm>

            <CenterView>
              <MainInput placeholder="Nombre de usuario"></MainInput>
            </CenterView>

            <LabelForm texto="Contraseña"></LabelForm>

            <CenterView>
              <PwdInput placeholder="Contraseña"></PwdInput>
            </CenterView>
          </View>

          <CenterView>
            <MarginBoton
              texto="Ingresar"
              onPress={() => {
                navigation.navigate('index');
              }}></MarginBoton>
          </CenterView>

          <View
            style={[
              styles.cardBadge,
              theme === 'dark' ? styles.darkCard : styles.light,
            ]}>
            <LabelForm texto="Olvidaste tu usuario o contraseña"></LabelForm>

            <Switch
              trackColor={{false: '#767577', true: '#F35C56'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  switch: {
    marginTop: 10,
    marginLeft: '2%',
  },
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
    marginTop: -10,
  },
  cardBadge: {
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
    paddingBottom: 20,
    paddingTop: 15,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  dark: {
    backgroundColor: '#2A2929',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },

  imgLogin: {
    width: 200,
    height: 200,
  },
  darkCard: {
    backgroundColor: '#2A2929',
  },
});

export default LogIn;
