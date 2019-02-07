import React, { Component } from 'react'
import SideNavLayout from './SideNavLayout'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
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
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle
            tag="span"
            nav={true}
            style={textDecorationStyle}
          >
            <i className="fa fa-angle-down"></i> {method.name}
          </DropdownToggle>
            <ul key={`${method.name}`} style={textDecorationStyle}>
              <DropdownMenu>
                { method.objects.map((object, i) => (
                  <li key={object.name} style={textDecorationStyle}>
                  <DropdownItem>
                    <Link 
                      to={`${object.name}`}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      {object.name}
                    </Link>
                  </DropdownItem>
                  </li>
                ))}
              </DropdownMenu>
            </ul>
        </UncontrolledDropdown>
      </div>
    ))
  }
  
  render() {
    return (
      <div className="side-nav-sticky">
          <SideNavLayout>
            {this.renderNavItems()}
            <Button onClick={this.scrollToTop}>Zoom To Top</Button>
          </SideNavLayout>
      </div>
    )
  }
}

const textDecorationStyle = {
  listStyle: 'none',
  color: '#58a0d7',
  cursor: 'url(../favicon.ico) 5 5, auto',
  padding: '2px'
}
