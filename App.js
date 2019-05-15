/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import TextInputComment from './components/Profile/TextInputComment'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import profilePageReducer from './redux/profilePageReducer'
import Profile from './components/Profile/Profile'
import MyPosts from './components/Profile/MyPosts';

const combinedReducers = combineReducers({
 profilePage: profilePageReducer
})
const store = createStore(combinedReducers)
const state = store.getState()

const App = () => {
 console.log('App start')
 return (
  <Provider store={store}>
   <ScrollView>
    <View style={{ flex: 1 }}>
     <Header />
     <NavBar />
     <View style={styles.container}>
      <View>
       <Text style={{ fontSize: 25, fontFamily: 'Iowan Old Style' }}><Profile /></Text>
      </View>
      <MyPosts />
      <TextInputComment />
     </View>
    </View>
   </ScrollView>
  </Provider >
 );
}

const styles = StyleSheet.create({
 container: {
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
 }
});

export default App
