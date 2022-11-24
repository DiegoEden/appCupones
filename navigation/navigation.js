import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Start from '../views/start';
import LogIn from '../views/logIn';
import SignInOpt from '../views/signInOpt';
import SignIn from '../views/signIn';
import History from '../views/history';
import {useColorScheme, StyleSheet, View, Image} from 'react-native';
import PhoneSignIn from '../views/phoneSignIn';
import Home from '../views/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../views/main';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Salud from '../views/salud';
import Detalle from '../views/detalle';
import Profile from '../views/profile';
import {AddButton} from '../components/button';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RegisterStack = () => {
  const theme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        navigationBarColor: theme === 'dark' ? '#2A2929' : '#F2F2F2',
      }}>
      <Stack.Screen
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
        name="SigInMain"
        component={Start}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
        }}
        name="Iniciar Sesión"
        component={LogIn}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
        }}
        name="Registrarme"
        component={SignInOpt}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
        }}
        name="Regístrate"
        component={SignIn}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),

          headerTitleAlign: 'center',
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
        }}
        name="Regístrate con tu teléfono"
        component={PhoneSignIn}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="index"
        component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const theme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        navigationBarColor: theme === 'dark' ? '#2A2929' : '#F2F2F2',
      }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },

          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),

          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          tabBarStyle: {display: 'none'},
          headerShadowVisible: false,
          title: ' ',
          headerSearchBarOptions: {
            placeholder: 'Buscar',
            fontFamily: 'Montserrat-Medium',
            barTintColor: theme === 'dark' ? '#464646' : '#F0F1F5',
            textColor: theme === 'dark' ? '#D6D6D6' : 'black',
            hintTextColor: theme === 'dark' ? '#D6D6D6' : '#C8C8D3',
            headerIconColor: theme === 'dark' ? '#D6D6D6' : '#272459',
          },
        }}
        name="Inicio"
        component={Main}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: 'Buscar',
            fontFamily: 'Montserrat-Medium',
            barTintColor: theme === 'dark' ? '#464646' : '#F0F1F5',
            textColor: theme === 'dark' ? '#D6D6D6' : 'black',
            hintTextColor: theme === 'dark' ? '#D6D6D6' : '#C8C8D3',
            headerIconColor: theme === 'dark' ? '#D6D6D6' : '#272459',
          },
        }}
        name="Salud"
        component={Salud}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
          title: 'Detalle',
          /* headerSearchBarOptions: {
            placeholder: 'Buscar',
            fontFamily: 'Montserrat-Medium',
            barTintColor: theme === 'dark' ? '#464646' : '#F0F1F5',
            textColor: theme === 'dark' ? '#D6D6D6' : 'black',
            hintTextColor: theme === 'dark' ? '#D6D6D6' : '#C8C8D3',
            headerIconColor: theme === 'dark' ? '#D6D6D6' : '#272459',
          }, */
        }}
        name="Detalles del producto"
        component={Detalle}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
          },
          title: 'Mis cupones',
          headerBackImageSource:
            theme === 'dark'
              ? require('../src/img/chevOscuro.png')
              : require('../src/img/chev.png'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerTintColor: theme === 'dark' ? 'white' : '#272459',
          headerShadowVisible: false,
        }}
        name="Historial"
        component={History}></Stack.Screen>
    </Stack.Navigator>
  );
};

const MainTab = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer
      style={[theme === 'dark' ? styles.dark : styles.light]}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? '#2A2929' : '#F2F2F2',
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: '#F35C56',
          tabBarInactiveTintColor: '#C8C8D3',
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => <View style={{width: 0, height: 0}}></View>,
            tabBarStyle: {display: 'none'},
          }}
          name="signUp"
          component={RegisterStack}></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Montserrat-Bold',
            },
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={35}></MaterialCommunityIcons>
            ),
            headerStyle: {
              backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
            },
            headerTitleStyle: {
              display: 'none',
            },
            headerShadowVisible: false,
          }}
          name="Home"
          component={HomeStack}></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarLabel: '',
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Montserrat-Bold',
            },
            headerStyle: {
              backgroundColor: theme === 'dark' ? '#2A2929' : 'white',
            },
            headerTitleStyle: {
              display: 'none',
            },
            headerShadowVisible: false,
            tabBarIcon: ({}) => (
              <Image
                source={require('../src/img/add.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  marginTop: '30%',
                  marginEnd: '5%',
                  marginLeft: '5%',
                }}></Image>
            ),
            tabBarButton: props => <AddButton {...props}></AddButton>,
          }}
          name="Add"
          component={History}></Tab.Screen>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: 'Montserrat-Bold',
            },
            tabBarLabel: 'User',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5
                name="user-alt"
                color={color}
                size={size}></FontAwesome5>
            ),
          }}
          name="Configuración"
          component={Profile}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#2A2929',
    color: 'white',
  },

  light: {
    backgroundColor: 'white',
  },
});

export default MainTab;
