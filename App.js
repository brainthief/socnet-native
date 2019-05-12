/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header/Header'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import profilePageReducer from './redux/profilePageReducer'
import Profile from './components/Profile/Profile'

const combinedReducers = combineReducers({
 profilePage: profilePageReducer
})
const store = createStore(combinedReducers)
const state = store.getState()

const App = () => {
 console.log('App start')
 return (
  <Provider store={store}>
   <View style={{ flex: 1 }}>
    <View style={styles.top}>
     <Header style={styles.topText} />
    </View>
    <View style={{
     flexDirection: 'row',
     height: 30
    }}>
     <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
     <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
     <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
    </View>
    <View style={styles.container}>
     <View>
      <Text style={{ fontSize: 25 }}><Profile /></Text>
     </View>
     <View style={{ width: '100%' }}>{state.profilePage.comments.map((el, index) => {
      return (
       // <View>
       //  <View style={{ flex: 1, backgroundColor: '#F5FCFF', padding: 2 }}>
       //   <Text>[img]</Text>
       //   <Text style={{ backgroundColor: '#F5FCFF', width: 'auto' }}>{el.msg}</Text>
       //   <Text>Like: {el.likeCount}</Text>
       //  </View>
       // </View>

       <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginBottom: 2 }} key={index}>
        <View style={{ width: 50, backgroundColor: '#F5FCFF', padding: 2 }}>
         <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={require('./src/logomsg.png')}
         />
        </View>
        <View style={{
         flex: 9, backgroundColor: '#F5FCFF', padding: 2, flexDirection: 'column',
         justifyContent: 'center',
        }}><Text>{el.msg}</Text></View>
        <View style={{
         flex: 2, backgroundColor: 'powderblue', padding: 2,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
        }}>
         <View>
          <Text>Like:</Text>
         </View>
         <View>
          <Text>{el.likeCount}</Text>
         </View>
        </View>
       </View>
      )
     })}
     </View>
    </View>
   </View>
  </Provider >
 );
}

const styles = StyleSheet.create({
 top: {
  backgroundColor: 'steelblue',
  paddingTop: 20,
  paddingBottom: 5,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative'
 },
 topText: {
  color: '#f0f8ff',
  fontSize: 20
 },
 container: {
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
 }
});

export default App
