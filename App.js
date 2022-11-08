import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  TextInput,
  Switch,
  useColorScheme,
  Appearance,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {MainInput, VerInput} from './components/input';
import {
  Boton,
  MarginBoton,
  WhiteButton,
  LoginButton,
} from './components/button';
import {LabelForm} from './components/label';

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    /*<View style={styles.container}>
      <ImageBackground
        source={require('./src/img/frameInicio.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('./src/img/cuponLogo.png')}
          style={styles.logo}></Image>

        <MarginBoton texto="Iniciar sesión"></MarginBoton>
        <WhiteButton texto="Registrarme"></WhiteButton>
      </ImageBackground>
    </View>*/

    /*<View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View
        style={[
          styles.card,
          theme === 'dark' ? styles.darkCard : styles.light,
        ]}>
        <View style={styles.center}>
          <Image
            source={require('./src/img/cuponLogo.png')}
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
        <Pressable style={styles.loginButton}>
          <Text style={styles.textbutton}>Ingresar</Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.cardBadge,
          theme === 'dark' ? styles.darkCard : styles.light,
        ]}>
        <Text
          style={[
            styles.textLogin,
            theme === 'dark' ? styles.darkTitle : styles.textLogin,
          ]}>
          Olvidaste tu usuario o contraseña
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#F35C56'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </View>*/

    /*<View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View
        style={[
          styles.card,
          theme === 'dark' ? styles.darkCard : styles.light,
        ]}>
        <View style={styles.center}>
          <Image
            source={require('./src/img/cuponLogo.png')}
            style={styles.imgLogin}></Image>

          <Text
            style={[
              styles.titulo,
              theme === 'dark' ? styles.darkTitle : styles.titulo,
            ]}>
            ¡Regístrese para continuar explorando!
          </Text>

          <View style={styles.row}>
            <Pressable>
              <Image
                style={styles.loginIcons}
                source={require('./src/img/icon-google.png')}></Image>
            </Pressable>

            <Pressable>
              <Image
                style={styles.loginIcons}
                source={require('./src/img/icon-facebook.png')}></Image>
            </Pressable>

            <Pressable>
              <Image
                style={styles.loginIcons}
                source={require('./src/img/icon-apple.png')}></Image>
            </Pressable>
          </View>
        </View>
        <LabelForm texto="Número de teléfono"></LabelForm>
        <View style={styles.center}>
          <MainInput placeholder="Número de teléfono"></MainInput>
        </View>

        <View style={styles.center}>
          <LoginButton texto="Continuar"></LoginButton>
        </View>
      </View>
    </View>*/

    /* <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
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
                source={require('./src/img/cuponLogo.png')}
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
              <MainInput placeholder="Número de teléfono"></MainInput>
            </View>
            <LabelForm texto="Contraseña"></LabelForm>

            <View style={styles.center}>
              <MainInput placeholder="Contraseña"></MainInput>
            </View>
            <LabelForm texto="Confirmar contraseña"></LabelForm>

            <View style={styles.center}>
              <MainInput placeholder="Confirmar contraseña"></MainInput>
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
            <Boton texto="Ingresar"></Boton>
          </View>
        </View>
      </>
    </ScrollView>*/

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
          <LoginButton texto="Continuar"></LoginButton>
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

    /*<View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View style={styles.center}>
        <Image
          style={styles.logo2}
          source={
            theme === 'light'
              ? require('./src/img/logo2.png')
              : require('./src/img/logo2Dark.png')
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
        <MarginBoton texto="Empezar"></MarginBoton>
      </View>
    </View>*/
  );
};

const styles = StyleSheet.create({
  loginIcons: {
    marginLeft: 15,
    marginEnd: 15,
    width: 44,
    height: 44,
  },
  darkCard: {
    backgroundColor: '#343434',
  },
  darkTitle: {
    color: '#D6D6D6',
  },
  logo2: {
    width: '100%',
    height: '70%',
  },
  margin: {
    marginLeft: 15,
    marginEnd: 15,
  },
  h1: {
    color: '#272459',
    marginTop: -70,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  pinkHead: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#F35C56',
    textAlign: 'center',
    marginTop: 60,
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
  imgSigIn: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowSMS: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 15,
  },
  titulo: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: '#75759E',
    marginBottom: 30,
  },
  switch: {
    marginTop: 10,
  },
  sigInSwitch: {
    marginLeft: 25,
    marginTop: 10,
  },
  center: {
    alignItems: 'center',
  },
  imgLogin: {
    width: 200,
    height: 200,
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
  },
  badge: {
    flexDirection: 'row',
    paddingTop: 3,
    marginLeft: 30,
    marginEnd: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
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
