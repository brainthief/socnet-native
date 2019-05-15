import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

const MyPosts = (props) => {
 const { comments } = props.profilePage

 return (
  <View style={{ width: '100%' }}>
   {comments.map((el, index) => {
    return (
     <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginBottom: 2 }} key={index}>
      <View style={{ width: 50, backgroundColor: '#F5FCFF', padding: 2 }}>
       <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={require('./../../src/logomsg.png')}
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
 )
}

const mapStateToProps = (state) => {
 return {
  profilePage: state.profilePage
 }
}

export default connect(mapStateToProps)(MyPosts)