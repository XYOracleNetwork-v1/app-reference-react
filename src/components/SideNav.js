import React, { Component } from 'react'

const sideNavStyle = {
  'padding': '10px'
}

export default class SideNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: this.props.supers
    }
  }

  // showMethod = () => {
  //   this.setState(state => ({class: this.props.superClass.map(method)}))
  // }
  
  render() {
    return (
      <div style={sideNavStyle}>
        <a href='#'>{this.props.supers}</a>
      </div>
    )
  }
}