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
} from 'react-native';
import {ScrollView} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const theme = useColorScheme();

  const modo = Appearance.getColorScheme();
  if (modo === 'dark') {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#343434');
  } else if (modo === 'light') {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#FFFFFF');
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

        <Pressable style={styles.button}>
          <Text style={styles.textbutton}>Iniciar sesión</Text>
        </Pressable>
        <Pressable style={styles.whiteButton}>
          <Text style={styles.whiteText}>Registrarme</Text>
        </Pressable>
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

        <Text
          style={[
            styles.textLogin,
            theme === 'dark' ? styles.darkTitle : styles.textLogin,
          ]}>
          Usuario
        </Text>
        <View style={styles.center}>
          <TextInput
            style={[
              styles.input,
              theme === 'dark' ? styles.darkInput : styles.input,
            ]}
            placeholder="Nombre de usuario"
            placeholderTextColor={'#C8C8D3'}
            cursorColor={'#F35C56'}></TextInput>
        </View>
        <Text
          style={[
            styles.textLogin,
            theme === 'dark' ? styles.darkTitle : styles.textLogin,
          ]}>
          Contraseña
        </Text>
        <View style={styles.center}>
          <TextInput
            style={[
              styles.input,
              theme === 'dark' ? styles.darkInput : styles.input,
            ]}
            placeholder="Contraseña"
            placeholderTextColor={'#C8C8D3'}
            textContentType="password"
            secureTextEntry={true}
            cursorColor={'#F35C56'}></TextInput>
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
        <Text
          style={[
            styles.textLogin,
            theme === 'dark' ? styles.darkTitle : styles.textLogin,
          ]}>
          Número de teléfono
        </Text>
        <View style={styles.center}>
          <TextInput
            style={[
              styles.input,
              theme === 'dark' ? styles.darkInput : styles.input,
            ]}
            placeholder="Número de teléfono"
            placeholderTextColor={'#C8C8D3'}
            cursorColor={'#F35C56'}
            keyboardType={'number-pad'}></TextInput>
        </View>

        <View style={styles.center}>
          <Pressable style={styles.sigInButton}>
            <Text style={styles.textbutton}>Continuar</Text>
          </Pressable>
        </View>
      </View>
    </View>*/

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
                source={require('./src/img/cuponLogo.png')}
                style={styles.imgSigIn}></Image>
            </View>
            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Usuario
            </Text>

            <View style={styles.center}>
              <TextInput
                style={[
                  styles.input,
                  theme === 'dark' ? styles.darkInput : styles.input,
                ]}
                placeholder="Nombre de usuario"
                placeholderTextColor={'#C8C8D3'}
                cursorColor={'#F35C56'}></TextInput>
            </View>

            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Email
            </Text>
            <View style={styles.center}>
              <TextInput
                style={[
                  styles.input,
                  theme === 'dark' ? styles.darkInput : styles.input,
                ]}
                placeholder="Ejemplo@mail.com"
                placeholderTextColor={'#C8C8D3'}
                cursorColor={'#F35C56'}></TextInput>
            </View>
            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Número de teléfono
            </Text>
            <View style={styles.center}>
              <TextInput
                style={[
                  styles.input,
                  theme === 'dark' ? styles.darkInput : styles.input,
                ]}
                placeholder="Número de teléfono"
                placeholderTextColor={'#C8C8D3'}
                cursorColor={'#F35C56'}
                keyboardType={'number-pad'}></TextInput>
            </View>
            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Contraseña
            </Text>
            <View style={styles.center}>
              <TextInput
                style={[
                  styles.input,
                  theme === 'dark' ? styles.darkInput : styles.input,
                ]}
                placeholder="Contraseña"
                placeholderTextColor={'#C8C8D3'}
                textContentType="password"
                secureTextEntry={true}
                cursorColor={'#F35C56'}></TextInput>
            </View>

            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Confirmar contraseña
            </Text>
            <View style={styles.center}>
              <TextInput
                style={[
                  styles.input,
                  theme === 'dark' ? styles.darkInput : styles.input,
                ]}
                placeholder="Confirmar contraseña"
                placeholderTextColor={'#C8C8D3'}
                textContentType="password"
                secureTextEntry={true}
                cursorColor={'#F35C56'}></TextInput>
            </View>
          </View>
          <View style={styles.badge}>
            <Text
              style={[
                styles.textLogin,
                theme === 'dark' ? styles.darkTitle : styles.textLogin,
              ]}>
              Acepto términos de servicio
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#F35C56'}}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.sigInSwitch}
            />
          </View>
          <View style={styles.center}>
            <Pressable style={styles.sigInButton2}>
              <Text style={styles.textbutton}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </>
    </ScrollView>

    /* <View
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
          <TextInput
            style={[
              styles.VeriInput,
              theme === 'dark' ? styles.darkInput : styles.VeriInput,
            ]}
            cursorColor={'#F35C56'}
            keyboardType={'number-pad'}></TextInput>
          <TextInput
            style={[
              styles.VeriInput,
              theme === 'dark' ? styles.darkInput : styles.VeriInput,
            ]}
            cursorColor={'#F35C56'}
            keyboardType={'number-pad'}></TextInput>
          <TextInput
            style={[
              styles.VeriInput,
              theme === 'dark' ? styles.darkInput : styles.VeriInput,
            ]}
            cursorColor={'#F35C56'}
            keyboardType={'number-pad'}></TextInput>
          <TextInput
            style={[
              styles.VeriInput,
              theme === 'dark' ? styles.darkInput : styles.VeriInput,
            ]}
            cursorColor={'#F35C56'}
            keyboardType={'number-pad'}></TextInput>
        </View>
        <View style={styles.center}>
          <Pressable style={styles.sigInButton}>
            <Text style={styles.textbutton}>Continuar</Text>
          </Pressable>
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
    </View> */

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
        <Pressable style={styles.button}>
          <Text style={styles.textbutton}>Empezar</Text>
        </Pressable>
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
  darkInput: {
    backgroundColor: '#464646',
    color: 'white',
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
  VeriInput: {
    marginLeft: 17,
    marginTop: 15,
    backgroundColor: '#F0F1F5',
    width: '17%',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
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
  sigInButton2: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 15,
    width: '87%',
    marginBottom: 30,
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
    marginLeft: 30,
    marginTop: 10,
  },
  input: {
    marginLeft: 4,
    marginTop: 15,
    backgroundColor: '#F0F1F5',
    width: '90%',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  textLogin: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 25,
    marginTop: 15,
    color: '#75759E',
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
  button: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 60,
    width: '87%',
  },
  sigInButton: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 30,
    width: '87%',
  },
  loginButton: {
    backgroundColor: '#F35C56',
    borderRadius: 22,
    marginTop: 30,
    width: 310,
  },
  textbutton: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  whiteButton: {
    backgroundColor: '#F3F3F3',
    borderRadius: 22,
    marginTop: 20,
    width: '87%',
  },
  whiteText: {
    color: '#F35C56',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 300,
  },
});
