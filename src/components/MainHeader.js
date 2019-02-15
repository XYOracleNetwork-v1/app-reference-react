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
      <div className="bg-navy">
        <Navbar expand="md" className="container navbar-dark">
          <NavbarBrand href="http://developers.xyo.network/" className="text-white"><img src={logo} alt="XYO Dev Portal" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>  
                <Nav navbar className="ml-auto navbar-inverse bg-inverse">
                  <NavItem>
                  <NavLink href="https://developers.xyo.network/docs/en/getting-started/" className="text-white" >Getting Started</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="https://developers.xyo.network/docs/en/Introduction/" className="text-white">Guides</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="http://reference.xyo.network/" className="text-white">Reference</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://developers.xyo.network/help/" className="text-white" target="_blank">Help</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}