import React, { Component } from 'react'
import './styles.css';

export default class Eduwork extends Component {
  render() {
    return (
      <div class="component2">
        <form id='form2'>
          <h2>Education</h2>
        <label for="pEdu">Primary: </label>
        <input id='pEdu' type="text"  /><br/>

        <label for="sEdu">Secondary: </label>
        <input id='sEdu' type="text" /><br/>

        <label for="tEdu">Tertiary: </label>
        <input id='tEdu' type="text"  /><br/>

        <label for="work"><h2>Work Experience</h2> </label><br/>
        <textarea id='TA' cols="30" rows="10"></textarea><br/>
        </form>
      </div>
    )
  }
}
