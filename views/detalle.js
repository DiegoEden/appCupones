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
import {CenterView, CustomScrollView} from '../components/containers';

const Detalle = ({navigation}) => {
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
    <CustomScrollView>
      <View
        style={[
          styles.container,
          theme === 'dark' ? styles.dark : styles.light,
        ]}>
        <CenterView>
          <Image source={require('../src/img/producto.png')}></Image>
        </CenterView>

        <View style={theme === 'dark' ? styles.detalle : styles.light}>
          <Text
            style={[
              styles.titulo,
              theme === 'dark' ? styles.darkTitle : styles.light,
            ]}>
            Crema para masajes
          </Text>
          <CenterView>
            <Image
              style={styles.divider}
              source={require('../src/img/divider.png')}></Image>
          </CenterView>
        </View>
      </View>
    </CustomScrollView>
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
    backgroundColor: '#2A2929',
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
    marginTop: '5%',
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
  detalle: {
    backgroundColor: '#343434',
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    marginTop: '15%',
  },
  divider: {
    marginTop: '10%',
    marginBottom: '10%',
  },
});

export default Detalle;
