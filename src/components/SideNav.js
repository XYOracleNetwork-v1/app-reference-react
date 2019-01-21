import React, { Component } from 'react'

const sideNavStyle = {
  'padding': '10px'
}

export default class SideNav extends Component {
  constructor(props) {
    super(props)
  }

  // showMethod = () => {
  //   this.setState(state => ({class: this.props.superClass.map(method)}))
  // }
  
  render() {
    return (
      <div style={sideNavStyle}>
        <a href={this.props.methods}>{this.props.methods}</a>
        <a href={this.props.supers}>{this.props.supers}</a>
      </div>
    )
  }
}