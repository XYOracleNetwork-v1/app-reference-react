import React, { Component } from 'react'
import SideNavLayout from './SideNavLayout'

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
      <SideNavLayout>
        {this.renderNavItems()}
      </SideNavLayout>
    )
  }
}

const textDecorationStyle = {
  listStyle: 'none',
}
