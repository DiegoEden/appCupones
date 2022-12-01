import React from 'react';
import {
  View,
  useColorScheme,
  StyleSheet,
  Image,
  Appearance,
  StatusBar,
  ScrollView,
} from 'react-native';
import {CustomScrollView} from '../components/containers';

const History = () => {
  const theme = useColorScheme();
  return (
    <CustomScrollView>
      <View
        style={[
          styles.container,
          theme === 'dark' ? styles.dark : styles.light,
        ]}></View>
    </CustomScrollView>
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
});
export default History;
