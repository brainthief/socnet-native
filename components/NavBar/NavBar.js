import React from 'react'
import { View, StyleSheet } from 'react-native'

const NavBar = () => {

 return <View style={{
  flexDirection: 'row',
  height: 30
 }}>
  <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
  <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
  <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
 </View>
}

export default NavBar