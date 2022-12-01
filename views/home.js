import React from 'react';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  Text,
  BackHandler,
} from 'react-native';
import {MarginBoton, Boton} from '../components/button';
import {SubTitle, Title} from '../components/label';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
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

        <Title texto="Cupones"></Title>

        <SubTitle texto="Elegir cupones, simplemente seleccione y canjea."></SubTitle>
        <Text
          style={[
            styles.titulo,
            styles.margin,
            theme === 'dark' ? styles.darkTitle : styles.light,
          ]}></Text>
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
    backgroundColor: '#2A2929',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: '#2A2929',
  },
  logo2: {
    width: '100%',
    height: '70%',
  },
});

export default Home;
