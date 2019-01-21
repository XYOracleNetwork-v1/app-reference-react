import React, { Component } from 'react'

const sideNavStyle = {
  'padding': '10px'
}

export default class SideNav extends Component {

  render() {
    console.log(this.props.classes)
    return (
    <div style={sideNavStyle}>
      {this.props.methods.map((method, i) => (
        <ul key={method}><a href={method}>{method}</a>
          <li key={this.props.classes[i]}>{this.props.classes}</li>
        </ul>))}
        <h4>Class</h4>
        <div>
          <a href="#"></a>
        </div>
      </div>
    )
  }
}