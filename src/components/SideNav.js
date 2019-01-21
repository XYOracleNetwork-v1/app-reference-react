import React, { Component } from 'react'

const sideNavStyle = {
  'padding': '10px'
}

export default class SideNav extends Component {

  render() {
    return (
      <div style={sideNavStyle}>
        <a href="#">{this.props.methods.map((method, i) => (<p key={i}>{method}</p>))}</a>
        <h4>Class</h4>
        <div>
          <a href="#">{this.props.classes}</a>
        </div>
      </div>
    )
  }
}