import React, { Component } from 'react'

export default class SideNav extends Component {
  
  renderNavItems = () => {
    const { methods } = this.props

    return methods.map((method, i) => (
      <div>
        <h4><i className="fa fa-angle-down"></i> {method.name}</h4>
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
      <div className="side-nav">
        <div style={sideNavStyle} className="px-3">
          <div>
            {this.renderNavItems()}
          </div>
        </div>
      </div>
    )
  }
}

const sideNavStyle = {
  fontFamily: 'Titillium Web',
  boxShadow: '2px 2px 6px - 2px #3f3b3b'
}

const textDecorationStyle = {
  listStyle: 'none',
}
