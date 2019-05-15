import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
 return <View style={styles.top}>
  <Text style={styles.text}>SocNet Android version</Text>
 </View>
}

export default Header

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
 text: {
  color: '#f0f8ff',
  fontSize: 20
 },
});
