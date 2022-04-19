import React, { Component } from 'react';
import "./styles.css";
import UserAvatar from "./avatarFile/UserAvatar";

class GenaralInfoTab extends Component {
    render() {
    return (
    <div className="component1">
     <form>
         <h2>Personal Info</h2>
         <p id="avatar">< UserAvatar/><br/></p>
        <label for="name">Full Name: </label>
        <input id='name' type="text" placeholder='John Doe' /><br/>

        <label for="email">Email: </label>
        <input id='email' type="email" placeholder='User@gmail.com'/><br/>

        <label for="address">Address</label>
        <input id='address' type="text" placeholder='No.1 Hustle street, Lagos, Nigeria'/><br/>

        <label for="dateOfBirth">Email: </label>
        <input id='dateOfBirth' type="date" placeholder=''/><br/>
     </form>
    </div>
        
        );
    }
}

export default GenaralInfoTab;
