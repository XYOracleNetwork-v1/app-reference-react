import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap'

import logo from '../XYODevelopers_XYO_Logo.png'

export default class MainHeader extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div style={xyoNav}>
        <Navbar expand="md">
          <NavbarBrand href="http://developers.xyo.network/" style={navBrandStyle}><img src={logo} alt="XYO Dev Portal" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>  
                <Nav navbar className="ml-auto navbar-inverse bg-inverse">
                  <NavItem>
                  <NavLink href="https://developers.xyo.network/docs/en/getting-started/" style={navTextStyle} >Getting Started</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="https://developers.xyo.network/docs/en/Introduction/" style={navTextStyle}>Guides</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="http://reference.xyo.network/" style={navTextStyle}>Reference</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://developers.xyo.network/help/" style={navTextStyle} target="_blank">Help</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}

const navTextStyle = {
  color: 'white',
}

const navBrandStyle = {
  color: 'white'
}

const xyoNav = {
  background: '#141631',
  color: '#fff',
  minHeight: '50px',
  padding: '0',
  width: '100%',
  zIndex: '9999',
}