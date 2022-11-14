import React from 'react';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Main = ({navigation}) => {
  const theme = useColorScheme();
  return (
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>
      <View
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <View style={styles.center}>
        <TouchableOpacity style={{marginTop:30}}
          onPress={() => {
            navigation.navigate('Ventana2');
          }}>
          <Image source={require('../src/img/BannerHogar.png')}></Image>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.botones}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/item.png')
                  : require('../src/img/itemDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/item.png')
                  : require('../src/img/itemDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/item.png')
                  : require('../src/img/itemDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/item.png')
                  : require('../src/img/itemDark.png')
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={[
          styles.titulo,
          theme === 'dark' ? styles.darkTitle : styles.light,
        ]}>
        Eventos
      </Text>
      <View style={styles.center}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.botones2}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/eventos.png')
                  : require('../src/img/eventosDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones2}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/eventos.png')
                  : require('../src/img/eventosDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones2}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/eventos.png')
                  : require('../src/img/eventosDark.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botones2}
            onPress={() => {
              navigation.navigate('Ventana2');
            }}>
            <Image
              source={
                theme === 'light'
                  ? require('../src/img/eventos.png')
                  : require('../src/img/eventosDark.png')
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={[
          styles.titulo,
          theme === 'dark' ? styles.darkTitle : styles.light,
        ]}>
        Cupones activos
      </Text>
      <View style={styles.center}>
        <Image
          source={
            theme === 'light'
              ? require('../src/img/cupon.png')
              : require('../src/img/cuponDark.png')
          }></Image>
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
  },
  center: {
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 30,
  },
  botones: {
    marginLeft: 7,
    marginEnd: 7,
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
  botones2: {
    marginLeft: -2,
    marginEnd: -2,
  },
});
export default Main;
