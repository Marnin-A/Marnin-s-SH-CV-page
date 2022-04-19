import React, { Component } from 'react'
import './styles.css'

export default class SkillsRefs extends Component {
  render() {
    return (
      <div className="component3">
          <form id='form3'>
              <label for='skill'><strong>Skills</strong></label><br/>
              <textarea id='skill' cols="30" rows="10"></textarea><br/>
              
              <label for='Ref'><strong>References</strong></label><br/>
              <textarea id='Ref' cols="30" rows="10"></textarea>
          
          </form></div>
    )
  }
}
