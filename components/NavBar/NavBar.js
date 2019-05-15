import React from 'react'
import { View, Text } from 'react-native'

const NavBar = () => {

 return <View style={{
  flexDirection: 'row',
  height: 30
 }}>
  <View style={{
   flex: 1,
   backgroundColor: 'powderblue',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
  }}>
   <Text>Profile</Text>
  </View>
  <View style={{
   flex: 1,
   backgroundColor: 'skyblue',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
  }}>
   <Text>Dialogs</Text>
  </View>
  <View style={{
   flex: 1,
   backgroundColor: 'powderblue',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
  }}>
   <Text>Chat</Text>
  </View>
 </View>
}

export default NavBar