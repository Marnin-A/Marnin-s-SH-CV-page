import React, { Component } from 'react'
import Avatar from './avatar.png';


export default class UserAvatar extends Component {
  render() {
    return (
      <img src={Avatar} alt="User avatar" />
    )
  }
}
