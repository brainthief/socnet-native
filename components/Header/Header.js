import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Header = () => {
 return <Text style={styles.text}>SocNet Android version</Text>
}

export default Header

const styles = StyleSheet.create({
 text: {
  color: '#f0f8ff',
  fontSize: 20
 },
});
