/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header'

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <Header style={styles.topText} />
      </View>
      <View style={{ flexDirection: 'row', height: 30 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
      </View>
      <View style={styles.container}>
        <Text> Welcome to React Native! </Text>
        <Text >To get started, edit App.js</Text>
      </View>
    </View >
  );

}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'steelblue',
    paddingTop: 20,
    paddingBottom: 5,
    alignItems: 'center'
  },
  topText: {
    color: '#f0f8ff',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App
