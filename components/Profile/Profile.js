import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
 const { title } = props.profilePage
 return title
}

const mapStateToProps = (state) => {
 return {
  profilePage: state.profilePage
 }
}

const ConnectedProfile = connect(mapStateToProps)(Profile);

export default ConnectedProfile