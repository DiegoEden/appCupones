import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Start from '../views/start';
import LogIn from '../views/logIn';
import SignInOpt from '../views/signInOpt';
import SignIn from '../views/signIn';
import {useColorScheme, StyleSheet, View} from 'react-native';
import PhoneSignIn from '../views/phoneSignIn';
import Home from '../views/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../views/main';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RegisterStack = () => {
  const theme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        navigationBarColor: theme === 'dark' ? '#343434' : '#F2F2F2',
      }}>
      <Stack.Screen
        options={{headerShown: false, tabBarStyle: {display: 'none'}}}
        name="SigInMain"
        component={Start}></Stack.Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#343434' : 'white',
          },
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
            backgroundColor: theme === 'dark' ? '#343434' : 'white',
          },
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
            backgroundColor: theme === 'dark' ? '#343434' : 'white',
          },
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
            backgroundColor: theme === 'dark' ? '#343434' : 'white',
          },
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
    <Stack.Navigator>
      <Stack.Screen
       options={{
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#343434' : 'white',
        },
        headerTitleAlign: 'center',
        headerTintColor: theme === 'dark' ? 'white' : '#272459',
        headerShadowVisible: false,
      }}
        name="Inicio"
        component={Main}></Stack.Screen>
      
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
            backgroundColor: theme === 'dark' ? '#343434' : '#F2F2F2',
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
              backgroundColor: theme === 'dark' ? '#343434' : 'white',
            },
            headerTitleStyle: {
              display: 'none',
            },
            headerShadowVisible: false,
            title: 'Inicio',
          }}
          name="Home"
          component={HomeStack}></Tab.Screen>
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
          component={Main}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#343434',
    color: 'white',
  },

  light: {
    backgroundColor: 'white',
  },
});

export default MainTab;
