import React, {useEffect} from 'react';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  BackHandler,
  Button,
} from 'react-native';
import {TouchableOpacity, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const Main = ({navigation}) => {
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
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>
        <View
          style={[
            styles.container,
            theme === 'dark' ? styles.dark : styles.light,
          ]}>
          <View style={styles.center}>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                navigation.navigate('Salud');
              }}>
              <Image source={require('../src/img/BannerHogar.png')}></Image>
            </TouchableOpacity>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.botones}
                  onPress={() => {
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
                  }}>
                  <Image
                    source={
                      theme === 'light'
                        ? require('../src/img/item.png')
                        : require('../src/img/itemDark.png')
                    }></Image>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <Text
            style={[
              styles.titulo,
              theme === 'dark' ? styles.darkTitle : styles.light,
            ]}>
            Eventos{' '}
          </Text>
          <View style={styles.center}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.botones2}
                  onPress={() => {
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
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
                    navigation.navigate('Salud');
                  }}>
                  <Image
                    source={
                      theme === 'light'
                        ? require('../src/img/eventos.png')
                        : require('../src/img/eventosDark.png')
                    }></Image>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    backgroundColor: '#2A2929',
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
    marginEnd: 10,
    marginLeft: 10,
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
    marginLeft: 1,
    marginEnd: 1,
  },
});
export default Main;
