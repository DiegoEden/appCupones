import React, {useState} from 'react';
import {MainInput} from '../components/input';
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
} from 'react-native';

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
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>
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
            </View>

            <LabelForm texto="Usuario"></LabelForm>
            <View style={styles.center}>
              <MainInput placeholder="Nombre de usuario"></MainInput>
            </View>
            <LabelForm texto="Contraseña"></LabelForm>

            <View style={styles.center}>
              <MainInput placeholder="Contraseña"></MainInput>
            </View>
          </View>

          <View style={styles.center}>
            <MarginBoton
              texto="Ingresar"
              onPress={() => {
                navigation.navigate('index');
              }}></MarginBoton>
          </View>

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
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  switch: {
    marginTop: 10,
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
    marginTop: 30,
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
    backgroundColor: '#343434',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
  },
  imgLogin: {
    width: 200,
    height: 200,
  },
  darkCard: {
    backgroundColor: '#343434',
  },
});

export default LogIn;
