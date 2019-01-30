import React, { Component } from 'react'
import SideNavLayout from './SideNavLayout'
import { Button } from 'reactstrap'
import { Link, animateScroll as scroll } from 'react-scroll'

import logo from '../XYODevelopers_XYO_Logo.png'

export default class SideNav extends Component {

  scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  renderNavItems = () => {
    const { methods } = this.props

    return methods.map((method, i) => (
      <div>
        <h4><i className="fa fa-angle-down"></i> {method.name}</h4>
        <ul key={`${method.name}`} style={textDecorationStyle}>
          { method.objects.map((object, i) => (
            <li key={object.name} style={textDecorationStyle}>
              <Link 
                to={`${object.name}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {object.name}
              </Link>
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
        <Button onClick={this.scrollToTop}><img src={logo} alt="logo" /></Button>
      </SideNavLayout>
    )
  }
}

const textDecorationStyle = {
  listStyle: 'none',
  color: '#58a0d7',
  cursor: 'pointer',
  padding: '2px'
}
