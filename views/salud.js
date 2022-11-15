import React from 'react';
import {
  StatusBar,
  Appearance,
  useColorScheme,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Salud = ({navigation}) => {
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
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>
        <View
          style={[
            styles.container,
            theme === 'dark' ? styles.dark : styles.light,
          ]}>
          <Text
            style={[
              styles.titulo,
              theme === 'dark' ? styles.darkTitle : styles.light,
            ]}>
            Promocion del dia
          </Text>
          <View style={styles.center}>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detalles del producto');
              }}>
              <Image
                source={
                  theme === 'light'
                    ? require('../src/img/cupon.png')
                    : require('../src/img/cuponDark.png')
                }></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.center}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botones}
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Image source={require('../src/img/farmacia.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={[
              styles.titulo,
              theme === 'dark' ? styles.darkTitle : styles.light,
            ]}>
            Cupones
          </Text>
          <View style={styles.center}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detalles del producto');
              }}>
              <Image
                source={
                  theme === 'light'
                    ? require('../src/img/cupon.png')
                    : require('../src/img/cuponDark.png')
                }></Image>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 30,
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
  titulo: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#75759E',
    marginLeft: '10%',
  },
  darkTitle: {
    color: '#D6D6D6',
  },
  row: {
    flexDirection: 'row',
    marginTop: -25,
  },
  botones: {
    marginLeft: '-3%',
    marginEnd: '-3%',
  },
});

export default Salud;
