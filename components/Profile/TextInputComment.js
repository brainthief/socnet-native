import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addCommentActionCreator, updateCommentTextActionCreator } from './../../redux/profilePageReducer'

const TextFieldForComment = (props) => {
 const { newComment } = props.profilePage
 const { updateMessage, addMessage } = props
 return <View>
  <TextInput
   style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
   onChangeText={(e) => { updateMessage(e) }}
   value={newComment}
  />
  <Button
   onPress={() => { addMessage() }}
   title="Comment"
   color="#841584"
   accessibilityLabel="Save comment"
  />
 </View>
}

const mapStateToProps = (state) => {
 return {
  profilePage: state.profilePage
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addCommentActionCreator()) },
  updateMessage: (e) => {
   // alert(e)
   dispatch(updateCommentTextActionCreator(e))
  }
 }
}

const ConnectedTextFieldForComment = connect(mapStateToProps, mapDispatchToProps)(TextFieldForComment);

export default ConnectedTextFieldForComment