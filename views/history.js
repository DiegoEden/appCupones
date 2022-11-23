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

const History = () => {
  const theme = useColorScheme();
  return (
    <ScrollView style={theme === 'dark' ? styles.dark : styles.light}>
      <>
        <View
          style={[
            styles.container,
            theme === 'dark' ? styles.dark : styles.light,
          ]}></View>
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
});
export default History;
