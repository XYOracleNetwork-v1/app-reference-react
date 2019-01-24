import React, { Component } from 'react'

const sideNavStyle = {
  'fontFamily': 'SF Mono'
}

const textDecorationStyle = {
  'listStyle': 'none',
}

export default class SideNav extends Component {

  renderNavItems = () => {
    const { methods } = this.props

    return methods.map((method, i) => (
      <div>
        <h4>{method.name}</h4>
        <ul key={`${method.name}`} style={textDecorationStyle}>
          { method.objects.map((object, i) => (
            <li key={object.name} style={textDecorationStyle}>
              <a href={`#${object.name}`}>{object.name}</a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }
  
  render() {
    return (
      <div style={sideNavStyle} className="side-nav">
        <div>
          {this.renderNavItems()}
        </div>
      </div>
    )
  }
}